import React from "react";
import { Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      video_id: this.props.videoId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
    this.currentUserAndVideoCheck = this.currentUserAndVideoCheck.bind(this);
  }

  handleSubmit(e) {
    console.log(this.state.video_id)
    e.preventDefault();
    this.props
      .composeComment(this.state)
      .then(this.setState({ body: "" }));
  }

  currentUserAndVideoCheck() {
    if (!this.props.currentUserId) {
      this.props.history.push("/login");
    } else {
      this.setState({ video_id: this.props.videoId });
    }
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ body: "" });
  }

  render() {
    return (
      <div onClick={this.currentUserAndVideoCheck}>
        <div className="add-comment">
          <Avatar className="comment-avatar" />
          <div className="comment-form-and-buttons">
            <form>
              <TextField
                className="comment-form"
                sx={{
                  fontColor: "white",
                  // width: "1016px",
                }}
                variant="standard"
                value={this.state.body}
                placeholder={"Add a public comment..."}
                onChange={this.update("body")}
              />
              <div className="comment-buttons">
                <Button
                  sx={{
                    color: "grey",
                  }}
                  onClick={this.handleCancel}
                >
                  CANCEL
                </Button>
                <Button
                  sx={{
                    backgroundColor: "grey",
                  }}
                  variant="contained"
                  onClick={this.handleSubmit}
                >
                  COMMENT
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;
