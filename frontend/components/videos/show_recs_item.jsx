import React from "react";

class ShowRecsItem extends React.Component {
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
    const { video } = this.props;

    return (
      <div className="item2">
        <img
          className="item-thumbnail2"
          src={video.thumbnail}
          onClick={this.watchVideo}
        />
        <div className="item-info2">
          <div className="item-avatar2">
            <Avatar></Avatar>
          </div>
          <div className="item-text2">
            <div className="item-title2" onClick={this.watchVideo}>
              {video.title}
            </div>
            <div className="item-uploader2">{video.username}</div>
            <p className="item-uploader2">
              {"264K"} • {"3 days ago"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRecsItem;
