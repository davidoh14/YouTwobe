import React from "react";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import { AppBar, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { useState } from "react";


const NavBar = ({ currentUser, logout, classes, history, inheritedSearchTerm }) => {
  
  let pathName = history.location.pathname;
  let searchBarValue = "";
  if (pathName.includes('/results/')) {
    searchBarValue = inheritedSearchTerm
  }

  const [searchTerm, setSearchTerm] = useState(searchBarValue);
  
  const display = currentUser ? (
    <div>
      <Button
        onClick={logout}
        sx={{
          color: "white",
        }}
      >
        <AccountCircleIcon
          sx={{
            color: "white",
            
          }}
        ></AccountCircleIcon> Logout
      </Button>
    </div>
  ) : (
    <div>
      <Button
        className={classes.loginButton}
        variant="outlined"
        onClick={() => history.push("/login")}
        sx={{
          color: "white",
          borderColor: "white",
        }}
      >
        <PersonOutlineIcon
          sx={{
            color: "white",
          }}
        />
        Login
      </Button>
    </div>
  );

  function searchFormHandler() {
    if (searchTerm) {
      history.push(`/results/${searchTerm}`)
    }
  }

  return (
    <div>
      <AppBar elevation={0} className={classes.appbar}>
        <Toolbar
          className={classes.toolbar}
          position="sticky"
          sx={{ minHeight: "60px", maxHeight: "60px" }}
        >
          <div className={classes.toolbarLeft}>
            <Button className={classes.logo} onClick={() => history.push("/")}>
              <img
                src={window.YouTubeIconURL}
                className={classes.youtubeLogo}
              />
              <h1 className={classes.logoText}>YouTwobe</h1>
            </Button>
          </div>

          <div className={classes.toolbarMid}>
            <form
              className={classes.searchForm}
              onSubmit={() => searchFormHandler()}
            >
              <InputBase
                className={classes.searchBar}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                value={searchTerm}
                sx={{
                  color: "white",
                  width: "95%",
                  height: "40px",
                }}
              />
              <button
                type="button"
                onClick={() => searchFormHandler()}
                className={classes.searchButtonWrapper}
              >
                <SearchIcon
                  className={classes.searchIcon}
                  sx={{
                    width: "30px",
                    fontSize: "30px",
                    fontWeight: "normal",
                  }}
                />
              </button>
            </form>
          </div>

          <div className={classes.toolbarRight}>
            <VideoCallOutlinedIcon
              className={classes.toolbarRightIcon}
              onClick={() => history.push("/upload")}
            />
            <button
              // href="https://www.linkedin.com/in/david-oh-790071123/"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/david-oh-790071123/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon className={classes.toolbarRightIcon} />
            </button>
            <button
              // href="https://github.com/davidoh14/YouTwobe"
              onClick={() =>
                window.open("https://github.com/davidoh14/YouTwobe", "_blank")
              }
            >
              <GitHubIcon className={classes.toolbarRightIcon} />
            </button>
            {display}
          </div>
        </Toolbar>
      </AppBar>
      <div className="toolbar-pad"></div>
    </div>
  );
};

export default NavBar;