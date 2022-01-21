import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar } from "@mui/material";
import ColorAvatar from "../avatar/color_avatar";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.watchVideo = this.watchVideo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.convertDate = this.convertDate.bind(this);
  }

  watchVideo() {
    this.props.history.push(`/watch/${this.props.video.id}`);
  }

  handleDelete(videoId) {
    this.props.detachVideo(videoId);
  }

  convertDate() {
    const rawDate = Date.now() - new Date(this.props.video.createdAt);

    switch(true) {
      case (rawDate < 3600000): // less than an hour
        if (`${Math.round(rawDate / (1000 * 60))} minute(s) ago` === "0 minute(s) ago") return "Just now";
        return `${Math.round((rawDate/(1000 * 60)))} minute(s) ago`;
      case (rawDate >= 3600000 && rawDate < 86400000): // less than a day
        return `${Math.floor(rawDate / (1000 * 60 * 60))} hour(s) ago`; 
      case (rawDate >= 86400000 && rawDate < 604800000): // less than a week
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24))} day(s) ago`;
      case (rawDate >= 604800000 && rawDate < 2419200000): // less than a month
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7))} week(s) ago`;
      case (rawDate >= 2419200000): // months
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7 * 4))} month(s) ago`;
    }
  }

  render() {
    const { video, currentUserId } = this.props;
    let deleteButton =
      video.uploaderId === currentUserId ? <DeleteIcon /> : null;

    return (
      <div className="item">
        <div className="thumbnail-wrapper">
          <img
            className="item-thumbnail"
            src={video.thumbnail}
            onClick={this.watchVideo}
          />
        </div>
        <div className="item-info">
          <div className="item-avatar">
            <ColorAvatar username={video.username}/>
          </div>
          <div className="item-text">
            <div className="item-title" onClick={this.watchVideo}>
              {video.title}
            </div>
            <div className="item-uploader">{video.username}</div>
            <p className="item-uploader">
              {"326K"} • {this.convertDate()}
            </p>
          </div>
          <button
            className="item-delete"
            onClick={() => {
              this.handleDelete(video.id);
            }}
          >
            {deleteButton}
          </button>
        </div>
      </div>
    );
  }
}

export default VideoIndexItem;
