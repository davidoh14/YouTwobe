import React from "react"
import LikesContainer from "./video_likes_container"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";


class VideoLikes extends React.Component {
    render () {

        const { video } = this.props;

        if (video.currentLike) {
            like = <ThumbUpAltIcon onClick={() => console.log("click")}/>;
        } else {
            like = <ThumbUpOffAltIcon></ThumbUpOffAltIcon>;
        }

        // if (video.currentLike) {
        //   Like = <ThumbUpAltIcon></ThumbUpAltIcon>;
        // } else {
        //   Like = <ThumbUpOffAltIcon></ThumbUpOffAltIcon>;
        // }

        if (!video) {
            return null;
        }

        return (
          <div className="show-likes">
            {like}

            {video.likesLength}

            <ThumbDownAltIcon onClick={() => console.log("click2")} />

            {video.dislikesLength}
          </div>
        );
    }
}

export default VideoLikes;

