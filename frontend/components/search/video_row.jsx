import React from "react";
import { Avatar } from "@mui/material";


function VideoRow({ video, history }) {
    return (
      <button
        className="vid-row"
        onClick={() => history.push(`/watch/${video.id}`)}
      >
        <div className="thumbnail-wrapper">
          <img className="thumbnail" src={video.thumbnail}></img>
        </div>
        <div className="info">
          <div className="title">{video.title}</div>
          <div className="views-and-date">9.1M views • 1 year ago </div>
          <div className="avatar-and-username">
            <Avatar className="avatar"
                sx={{
                    width: "30px",
                    height: "30px",
                }}
            ></Avatar>
            <div className="username">{video.username}</div>
          </div>
          <div className="description">{video.description}</div>
        </div>
      </button>
    );
}

export default VideoRow