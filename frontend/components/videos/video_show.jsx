import React from "react";
import NavBarContainer from "../nav/nav_bar_container";
import ReactPlayer from "react-player";
import CommentIndexContainer from "../comments/comment_index_container";
import { Avatar, Button } from "@mui/material";
import ShowRecsContainer from "./show_recs_container";
import VideoLikesContainer from "../likes/video_likes_container"
import ColorAvatar from "../avatar/color_avatar"


class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    if (!this.props.video) {
      return null;
    }

    const { video } = this.props;

    const createdAt = new Date(video.createdAt);

    return (
      <div className="show">
        <NavBarContainer />
        <div className="show-body">
          <div className="player-and-comments">
            <div className="show-video-wrapper">
              <div className='show-video'>
                <ReactPlayer
                  url={video.video}
                  height='100%'
                  width='auto'
                  muted={false}
                  playing={true}
                  controls
                />
              </div>
            </div>
            <div className="show-info-and-com">
              <div className="show-info">
                <div className="show-title">{video.title}</div>
                <div className="views-bar">
                  <div className="show-views">326,377 views • {createdAt.toLocaleDateString("en-US", {month: 'short', day: 'numeric', year: 'numeric'})}</div>
                    <VideoLikesContainer video={video}/>
                </div>
                <div className="show-channel">
                  <div className="av-and-channel">
                    <ColorAvatar username={video.username} />
                    <div className="show-subs">
                      <div className="show-channel-name">{video.username}</div>
                      <div className="show-sub-count">18.7K subscribers</div>
                    </div>
                  </div>
                </div>
                <div className="show-description">{video.description}</div>
              </div>

              <div>
                <CommentIndexContainer />
              </div>
            </div>
          </div>

          <div className="show-recommendations">
            <ShowRecsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;