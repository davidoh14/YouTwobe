import React, { useState, useEffect } from "react";
import NavBarContainer from "../nav/nav_bar_container";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { CircularProgress } from "@mui/material";

function VideoUploadForm({ currentUser, videos, errors, createVideo, clearVideoErrors, history }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [videoErrors, setVideoErrors] = useState("");
  const [thumbnailErrors, setThumbnailErrors] = useState("");
  const [submitButtonMode, setSubmitButtonMode] = useState("disabled");

  useEffect(() => {
    if (title && video && thumbnail && !videoErrors && !thumbnailErrors) {
        setSubmitButtonMode("enabled")
    }
  }, [title, video, thumbnail, videoErrors, thumbnailErrors])

  function setButton() {
    if (submitButtonMode === "enabled") {
        console.log("useEffect condition 1");
        return (
            <Button variant="contained" onClick={handleSubmit}>
                Upload Video
            </Button>
        );
    } else if (submitButtonMode === "loading") {
        return <CircularProgress />;
    } else if (submitButtonMode === "disabled") {
        return (
            <Button variant="contained" disabled>
                Upload Video
            </Button>
        );
    }
  }

  useEffect(() => {
      return () => {
          clearVideoErrors();
      }
  }, [])

  function uploadVideo(e){
    setVideoErrors("");

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setVideo(file);
      setVideoUrl(fileReader.result);

      if (file.size > 25000000) {
        setVideoErrors("Please attach a video that is less than 25MB.");
      } else {
        setVideoErrors("")
      }
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  function uploadThumbnail(e) {
    setThumbnailErrors("");

    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        setThumbnail(file);
        setThumbnailUrl(fileReader.result);
    };

    if (file.size > 10000000) {
        setThumbnailErrors("Please attach a thumbnail that is less than 10MB.");
    } else {
        setThumbnailErrors("");
    }

    if (file) {
        fileReader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();


    const formData = new FormData();
    formData.append("video[title]", title);
    formData.append("video[description]", description);
    formData.append("video[uploader_id]", currentUser.id);
    formData.append("video[video]", video);
    formData.append("video[thumbnail]", thumbnail);

    setSubmitButtonMode("loading")

    createVideo(formData).then(
      (video) => history.push('/'),
      (errors) => setSubmitButtonMode("enabled")
    );
  }
  

  let preview = thumbnailUrl ? (
    <img src={thumbnailUrl} />
  ) : null;



  return(
      <div>
        <NavBarContainer />
        <div>
          <div className="video-upload-form">
            <h1>Video Upload</h1>
            <div className="upload-title">
              <TextField
                fullWidth
                margin="normal"
                id="filled"
                label="Title: (required)"
                variant="filled"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="upload-description">
              <TextField
                fullWidth
                margin="normal"
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <ul className="upload-errors">
              {errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>

            <button className="upload-video">
              <div>
                Upload a video file (required): 
                <input
                  type="file"
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={(e) => uploadVideo(e)}
                />
              </div>
            </button>

            <button>
              <div className="upload-thumbnail">
                Upload a thumbnail (required):
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => uploadThumbnail(e)}
                />
              </div>
              <div>{preview}</div>
            </button>
            <div className="attachment-errors">
              {videoErrors}
              {thumbnailErrors}
            </div>
            {setButton()}
          </div>
        </div>
      </div>
  );
}

export default VideoUploadForm;