import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


class SideBar extends React.Component{

    render () {
        return (
          <div>
            <div className="sidebar">
              <a href="https://www.linkedin.com/in/david-oh-790071123/">
                <LinkedInIcon className="sidebar-icon" />
              </a>
              <a href="https://github.com/davidoh14/YouTwobe">
                <GitHubIcon className="sidebar-icon" />
              </a>
            </div>
          </div>
        );
    }
}

export default SideBar;