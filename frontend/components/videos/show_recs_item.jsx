import React from "react";
import { Avatar } from "@mui/material";

class ShowRecsItem extends React.Component {
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
        return `${Math.round((rawDate/(1000 * 60)))} minute(s) ago`;
      case (rawDate >= 3600000 && rawDate < 86400000): // less than a day
        return `${Math.floor(rawDate / (1000 * 60 * 60))} hour(s) ago`; 
      case (rawDate >= 86400000 && rawDate < 604800000): // less than a week
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24))} day(s) ago`;
      case (rawDate >= 604800000 && rawDate < 2419200000): // less than a month
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7))} weeks(s) ago`;
      case (rawDate >= 2419200000): // months
        return `${Math.floor(rawDate / (1000 * 60 * 60 * 24 * 7 * 4))} month(s) ago`;
    }
  }

  render() {
    const { video } = this.props;

    return (
      <div className="item2">
        <img
          className="item-thumbnail2"
          src={video.thumbnail}
          onClick={this.watchVideo}
        />
        <div className="item-info2">
          <div className="item-text2">
            <div className="item-title2" onClick={this.watchVideo}>
              {video.title}
            </div>
            <div className="item-uploader2">{video.username}</div>
            <p className="item-uploader2">
              {"326K"} • {this.convertDate()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRecsItem;
