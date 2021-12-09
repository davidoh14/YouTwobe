import React from "react";
import VideoIndexItemContainer from "./video_index_item_container";

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { videos } = this.props;

    return (
      <div className="index">
        <div className="video-index">
          {videos.map((video) => (
            <div className="video-index-item" key={video.id}>
              <VideoIndexItemContainer
                video={video}
                history={this.props.history}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VideoIndex;
