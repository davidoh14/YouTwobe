import React, { useState, useEffect, useRef } from "react"

import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import { LOGOUT_CURRENT_USER } from "../../actions/session_actions";


function VideoLikes({ video, likes, currentUserId, fetchLikes, createLike, updateLike, deleteLike }) {
    const [currentLike, setCurrentLike] = useState([]);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const mounted = useRef();

        let like;

        let dislike;

    useEffect(() => {
        if (!mounted.current) {
            fetchLikes();
            mounted.current = true;
            console.log('if')
        } else {
            findCurrentLike();
            likeHandler();
            filterLikesDislikes();
            console.log('else')
        } 
    }, [likes]);

    function findCurrentLike(){
        let filteredLikes = likes.find((like) =>
            like.likerId === currentUserId && like.likableId === video.id)
        setCurrentLike(filteredLikes);

        console.log(currentLike, 'filter');
    };

    function filterLikesDislikes(){
        let filteredLikeCount = 0;
        let filteredDislikeCount = 0;
        
        likes.forEach((like) => {
            if (like.kind === "like") {
                filteredLikeCount += 1
            } else {
                filteredDislikeCount += 1
            };
        });

        setLikeCount(filteredLikeCount);
        setDislikeCount(filteredDislikeCount);
    }

    function likeHandler(){
        if (currentLike && currentLike.kind === "like") {
        // if like exists and kind = like, show a filled like button with action to delete like
        like = <ThumbUpAltIcon onClick={() => console.log("delete like")} />;
        } else if (currentLike && currentLike.kind === "dislike") {
        // if like exists but is kind = dislike, show unfilled like with action to post like
        like = (
            <ThumbUpOffAltIcon onClick={() => console.log("patch dislike to like")} />
        );
        } else {
        // if like doesn't exist, show unfilled like with action to create like
        like = <ThumbUpOffAltIcon onClick={() => console.log("like")} />;
        // createLike({
        //     likerId: currentUserId,
        //     kind: "like",
        //     likableType: "Video",
        //     likableId: video.id
        // })} />;
        }
    
        if (currentLike && currentLike.kind === "dislike") {
        // if dislike exists and kind = dislike, show a filled dislike button with action to delete dislike
        dislike = <ThumbDownAltIcon onClick={() => console.log("delete dislike")} />;
        } else if (currentLike && currentLike.kind === "like") {
        // if dislike exists but is kind = like, show unfilled dislike with action to post dislike
        dislike = (
            <ThumbDownOffAltIcon onClick={() => console.log("patch like to dislike")} />
        );
        } else {
        // if dislike doesn't exist, show unfilled dislike with action to create dislike
        dislike = (
            <ThumbDownOffAltIcon onClick={() => console.log("create dislike")} />
        );
        }
    }


        console.log(currentLike, 'currentLike return');
        likeHandler();
        return (
            
            <div className="show-likes">
    
                {like}
        
                {likeCount}
        
                {dislike}
        
                {dislikeCount}
    
            </div>
        );



}

export default VideoLikes;

