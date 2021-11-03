import React from "react";
import VideoIndexContainer from "./video_index_container";
import NavBarContainer from "../nav/nav_bar_container";
import ReactPlayer from "react-player";
import CommentIndexContainer from "../comments/comment_index_container";
import { Avatar, Button, Grid, Typography } from "@mui/material";


class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchVideo(this.props.videoId);
  }

  render() {
    if (!this.props.video) {
      return null;
    }

    const { video } = this.props;

    return (
      <div className="show">
        <NavBarContainer />
        <div className="show-body">
          <div className="player-and-comments">
            <ReactPlayer
              url={video.video}
              height="auto"
              width="100%"
              // url={window.squirrelURL}
              muted={false}
              playing={true}
              controls
            />
            <div className="show-info-and-com">
              <div className="show-info">
                <div className="show-title">{video.title}</div>
                <div className="views-bar">
                  <div className="show-views">326,377 views • Sep 16, 2021</div>
                  {/* <div className='show-date'>
                                        Sep 16, 2021
                                    </div> */}
                </div>
                <div className="show-channel">
                  <div className="av-and-channel">
                    <Avatar />
                    <div className="show-subs">
                      <div className="show-channel-name">{video.username}</div>
                      <div className="show-sub-count">18.7K subscribers</div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "red",
                    }}
                  >
                    SUBSCRIBE
                  </Button>
                </div>
                <div className="show-description">{video.description}</div>
              </div>

              <div>
                <CommentIndexContainer />
              </div>
            </div>
          </div>

          <div className="show-recommendations">
            <div className="recommendation-title">Recommendations</div>
            <VideoIndexContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoShow;

{
  /* <Container maxWidth='xl'>
                    <div className={classes.showPlayerWrapper}>
                        <ReactPlayer
                            width='100%'
                            height='100%'
                            url={video.video} 
                            muted={true}
                            playing={true}
                        />
                    </div>

                    <div className={classes.showPlayerControlsWrapper}>
                        <Grid container alignItems='center' justify='space-between' style={{padding: 16}}>
                            <Grid item>
                                <Typography variant='h5' style={{color: 'white'}}>{video.title}</Typography>
                            </Grid>

                            <Grid container direction='row' alignItems='center' justify='space-between' >
                                <Grid item>
                                    <IconButton className={classes.outerControlIcons} aria-label='Watch later'>
                                        <WatchLaterIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton className={classes.outerControlIcons} aria-label='Share'>
                                        <ShareIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton className={classes.outerControlIcons} aria-label='Info'>
                                        <InfoIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>

                        

                        <Grid container direction='row' alignItems='center' justify='center'>
                            <Grid item>
                                <IconButton className={classes.outerControlIcons} aria-label='Play'>
                                    <PlayCircleIcon fontSize='inherit' />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton className={classes.outerControlIcons} aria-label='Pause'>
                                    <PauseCircleIcon fontSize='inherit' />
                                </IconButton>
                            </Grid>



                        </Grid>
                    </div>

                </Container> */
}
