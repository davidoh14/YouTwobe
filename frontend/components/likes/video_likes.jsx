import React from "react"
import LikesContainer from "./video_likes_container"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";


class VideoLikes extends React.Component {
    render () {

        const { video } = this.props;

        return (
            <div className="show-likes"> 
                {video.likesLength}

                {/* {
                    if (video.currentLike) {
                        <ThumbUpAltIcon></ThumbUpAltIcon>
                    } else {
                        <ThumbUpOffAltIcon></ThumbUpOffAltIcon>
                    }
                } */}
                <button onClick={console.log("click")}>
                    <ThumbUpAltIcon></ThumbUpAltIcon>
                </button>
                {video.dislikesLength}
            </div>
        )
    }
}

export default VideoLikes;

