import React from "react";

import NavBarContainer from "./nav/nav_bar_container";
import VideoIndexContainer from "./videos/video_index_container";

class Home extends React.Component {
  render() {
    return (
      <div>home
        <NavBarContainer />
        <VideoIndexContainer />
      </div>
    );
  }
}

export default Home;
