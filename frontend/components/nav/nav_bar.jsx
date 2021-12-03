import React from "react";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
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

  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   setSearchTerm(inheritedSearchTerm)
  //   console.log(inheritedSearchTerm, searchTerm)
  // }, [])

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
            <MenuSharpIcon className={classes.navBarButton} />
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
                // value={searchTerm}
                sx={{
                  color: "white",
                  width: "95%",
                }}
              />
              <button type="button" className={classes.searchButtonWrapper}>
                <SearchIcon
                  className={classes.searchIcon}
                  onClick={() => searchFormHandler()}
                  sx={{
                    width: "30px",
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
            <a href="https://www.linkedin.com/in/david-oh-790071123/">
              <LinkedInIcon className={classes.toolbarRightIcon} />
            </a>
            <a href="https://github.com/davidoh14/YouTwobe">
              <GitHubIcon className={classes.toolbarRightIcon} />
            </a>

            {display}
          </div>
        </Toolbar>
      </AppBar>
      <div className="toolbar-pad"></div>
    </div>
  );
};

export default NavBar;