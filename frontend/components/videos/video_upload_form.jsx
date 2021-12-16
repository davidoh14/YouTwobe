import React from "react";
import NavBarContainer from "../nav/nav_bar_container";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";

class VideoUploadForm extends React.Component {
  constructor(props) {
    super(props);
    (this.state = {
      title: "",
      description: "",
      video: null,
      videoUrl: "",
      thumbnail: null,
      thumbnailUrl: "",
      attachmentErrors: "",
    }),
      (this.update = this.update.bind(this));
    this.uploadVideo = this.uploadVideo.bind(this);
    this.uploadThumbnail = this.uploadThumbnail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  uploadVideo(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ video: file, videoUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  uploadThumbnail(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ thumbnail: file, thumbnailUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!this.state.video || !this.state.thumbnail)  {
      this.setState({
        attachmentErrors: "Please attach a video and thumbnail",
      });
      return;
    }

    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[uploader_id]", this.props.currentUser.id);
    formData.append("video[video]", this.state.video);
    formData.append("video[thumbnail]", this.state.thumbnail);

    this.props.createVideo(formData).then(video => this.props.history.push('/'),
    );
  }


  render() {
    const preview = this.state.thumbnailUrl ? (
      <img src={this.state.thumbnailUrl} />
    ) : null;
    return (
      <div>
        <NavBarContainer />
        <div>
          <div className="video-upload-form">
            <h1>Video Upload</h1>
            <div className="upload-title">
              <TextField
                required
                fullWidth
                margin="normal"
                id="filled-required"
                label="Title:"
                variant="filled"
                value={this.state.title}
                onChange={this.update("title")}
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
                value={this.state.description}
                onChange={this.update("description")}
              />
            </div>

            <ul className="upload-errors">
              {this.props.errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>

            <button className="upload-video">
              <div>
                Upload a video file:
                <input type="file" onChange={this.uploadVideo} />
              </div>
            </button>

            <button>
              <div className="upload-thumbnail">
                Upload a thumbnail:
                <input type="file" onChange={this.uploadThumbnail} />
              </div>
              <div>{preview}</div>
            </button>
            <div className="attachment-errors">
              {this.state.attachmentErrors}
            </div>
            <Button variant="contained" onClick={this.handleSubmit}>
              Upload Video
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoUploadForm;
