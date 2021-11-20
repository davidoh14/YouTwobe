import React from "react"
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";


class VideoLikes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kind: "",
            likableType: "Video",
            likableId: this.props.video.id
        };
        this.handleLike = this.handleLike.bind(this);
    };

    render () {

        const { video } = this.props;

        let like;

        if (video.currentLike && video.currentLike.kind === "like") {
            // if like exists and kind = like, show a filled like button with action to delete like
            like = <ThumbUpAltIcon onClick={() => console.log("delete like")} />; 
        } else if (video.currentLike && video.currentLike.kind === "dislike"){
            // if like exists but is kind = dislike, show unfilled like with action to post like
            like = <ThumbUpOffAltIcon onClick={() => console.log("patch dislike to like")}/>;
        } else {
            // if like doesn't exist, show unfilled like with action to create like
            like = <ThumbUpOffAltIcon onClick={() => console.log("create like")} />;
        }

        let dislike;

        if (video.currentLike && video.currentLike.kind === "dislike") {
            // if dislike exists and kind = dislike, show a filled dislike button with action to delete dislike
            dislike = <ThumbDownAltIcon onClick={() => console.log("delete dislike")}/>;
        } else if (
            video.currentLike && video.currentLike.kind === "like") {
            // if dislike exists but is kind = like, show unfilled dislike with action to post dislike
            dislike = <ThumbDownOffAltIcon onClick={() => console.log("patch like to dislike")}/>;
        } else {
            // if dislike doesn't exist, show unfilled dislike with action to create dislike
            dislike = <ThumbDownOffAltIcon onClick={() => console.log("create dislike")}/>;
        }


        return (
          <div className="show-likes">

            {like}

            {video.likesLength}

            {dislike}

            {video.dislikesLength}

          </div>
        );
    }
}

export default VideoLikes;

