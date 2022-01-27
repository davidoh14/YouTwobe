import React from "react";
import ShowRecsItemContainer from "./show_recs_item_container.js";

class ShowRecs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    const { videos } = this.props;

    return (
      <div className="index2">
        <div className="index-left2" />
        <div className="video-index2">
          {videos.map((video) => (
            <div className="video-index-item2" key={video.id}>
              <ShowRecsItemContainer
                video={video}
                history={this.props.history}
              />
            </div>
          ))}
        </div>
        <div className="index-right2" />
      </div>
    );
  }
}

export default ShowRecs;
