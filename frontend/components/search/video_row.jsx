import React from "react";


function VideoRow({ video, history }) {
    return (
        <div className="vid-row"
            onClick={() => history.push(`/watch/${video.id}`)}
        >
            <img 
                className="vid-row-thumbnail" 
                src={video.thumbnail}    
            ></img>
            <div className="vid-row-info">
                <div className="vid-row-title">{video.title}</div>
                <div className="vid-row-views-and-date"></div>
                <div className="vid-row-avatar-and-uploader">
                    <div className="avatar"></div>
                    <div className="uploader">{video.uploader}</div>
                </div>
                <div className="description">{video.description}</div>
            </div>
        </div>
    );
}

export default VideoRow