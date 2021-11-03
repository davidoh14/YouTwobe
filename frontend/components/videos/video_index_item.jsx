import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar } from "@mui/material";

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.watchVideo = this.watchVideo.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  watchVideo() {
    this.props.history.push(`/watch/${this.props.video.id}`);
  }

  handleDelete(videoId) {
    this.props.detachVideo(videoId);
  }

  render() {
    const { video, currentUserId } = this.props;
    let deleteButton =
      video.uploaderId === currentUserId ? <DeleteIcon /> : null;

    return (
      <div className="item">
        <img
          className="item-thumbnail"
          src={video.thumbnail}
          onClick={this.watchVideo}
        />
        <div className="item-info">
          <div className="item-avatar">
            <Avatar></Avatar>
          </div>
          <div className="item-text">
            <div className="item-title" onClick={this.watchVideo}>
              {video.title}
            </div>
            <div className="item-uploader">{video.username}</div>
            <p className="item-uploader">
              {"264K"} • {"3 days ago"}
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
