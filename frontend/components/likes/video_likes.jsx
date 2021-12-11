import React, { useState, useEffect, useRef } from "react"

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";


function VideoLikes({ video, likes, history, currentUserId, fetchLike, fetchLikes, createLike, updateLike, deleteLike }) {

    const [currentLike, setCurrentLike] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const mounted = useRef();
    
    useEffect(() => {
        if (!mounted.current) {
            fetchLikes();
            mounted.current = true;
        } else {
            findCurrentLike();
            likeHandler();
            filterLikesDislikes();
        } 
    }, [likes]);
    
    let like;

    let dislike;

    function findCurrentLike(){
        let filteredLikes = likes.find((like) =>
            like.likerId === currentUserId && like.likableId === video.id)
        setCurrentLike(filteredLikes);
    };

    function filterLikesDislikes(){
        let filteredLikeCount = 0;
        let filteredDislikeCount = 0;
        
        likes.forEach((like) => {
            if (like.kind === "like" && like.likableId === video.id) {
                filteredLikeCount += 1
            } else if (like.kind === "dislike" && like.likableId === video.id){
                filteredDislikeCount += 1
            };
        });

        setLikeCount(filteredLikeCount);
        setDislikeCount(filteredDislikeCount);
    }

    function likeHandler(){
        if (currentLike && currentLike.kind === "like") {
            like = <ThumbUpAltIcon onClick={() => deleteLike(currentLike.id)} />;
        } else if (currentLike && currentLike.kind === "dislike") {
            like = <ThumbUpOffAltIcon onClick={() => updateLike({
                id: currentLike.id,
                liker_id: currentUserId,
                kind: "like",
                likable_type: "Video",
                likable_id: video.id
            })} />;
        } else {
            like = <ThumbUpOffAltIcon onClick={() => createLike({
                liker_id: currentUserId,
                kind: "like",
                likable_type: "Video",
                likable_id: video.id
            })} />;
        }
    
        if (currentLike && currentLike.kind === "dislike") {
            dislike = <ThumbDownAltIcon onClick={() => deleteLike(currentLike.id)} />;
        } else if (currentLike && currentLike.kind === "like") {
            dislike = (
              <ThumbDownOffAltIcon
                onClick={() =>
                  updateLike({
                    id: currentLike.id,
                    liker_id: currentUserId,
                    kind: "dislike",
                    likable_type: "Video",
                    likable_id: video.id,
                  })
                }
              />
            );
        } else {
            dislike = (
              <ThumbDownOffAltIcon
                onClick={() =>
                  createLike({
                    liker_id: currentUserId,
                    kind: "dislike",
                    likable_type: "Video",
                    likable_id: video.id,
                  })
                }
              />
            );
        }
    }

    function loggedInCheck() {
        if (!currentUserId) {
            history.push('/login')
        }
    }

    likeHandler();
    return (
        <div className="show-likes" >
            <button className="show-like-button">
                {like}
            </button>
    
            <div className="show-likes-count">
                {likeCount}
            </div>
             
            <button className="show-dislike-button">
                {dislike}
            </button>
    
            <div className="show-dislikes-count">
                {dislikeCount}
            </div>
        </div>
    );
}

export default VideoLikes;

