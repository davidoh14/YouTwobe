import React from "react";

import NavBarContainer from "./nav/nav_bar_container";
import SideBar from "./nav/side_bar";
import VideoIndexContainer from "./videos/video_index_container";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="nav-bar-wrapper">
          <NavBarContainer />
        </div>
        <div className="side-bar-and-video-index">
          <div className="side-bar-wrapper">
            <SideBar/>
          </div>
          <div className="video-index-wrapper">
            <VideoIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
