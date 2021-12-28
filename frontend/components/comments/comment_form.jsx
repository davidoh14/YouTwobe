import React from "react";
import { Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: "",
      video_id: this.props.videoId,
      commentButtons: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.currentUserCheck = this.currentUserCheck.bind(this);
  }


  currentUserCheck() {
    if (!this.props.currentUserId) {
      this.props.history.push("/login");
    }
  }

  toggleCommentButtons() {
    this.setState({ commentButtons: true })
  }

  showCommentButtons() {
    return (
      <div className="comment-buttons">
        <Button
          sx={{
            color: "grey",
          }}
          onClick={this.handleCancel}
        >
          CANCEL
        </Button>
        
        {this.state.body === "" ? (
          <Button
            sx={{
              backgroundColor: "grey",
            }}
            variant="contained"
            onClick={this.handleSubmit}
            disabled
          >
            COMMENT
          </Button>
        ) : (
          <Button
            sx={{
              backgroundColor: "grey",
            }}
            variant="contained"
            onClick={this.handleSubmit}
          >
            COMMENT
          </Button>
        )}
      </div>
    );
  }
  
  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();

    this.props
      .composeComment(this.state)
      .then(() => this.setState({ 
        body: "", 
        commentButtons: false
    }));
  }
  
  handleCancel(e) {
    e.preventDefault();
    
    this.setState({
      body: "",
      commentButtons: false,
    });
  }

  
  render() {
    return (
      <div onClick={this.currentUserCheck}>
        <div className="add-comment">
          <Avatar className="comment-avatar" />
          <div className="comment-form-and-buttons">
            <form className="comment-form">
              <label>
                <input
                  type="text"
                  className="comment-input"
                  value={this.state.body}
                  placeholder={"Add a public comment..."}
                  onChange={this.update("body")}
                  onClick={() => this.toggleCommentButtons()}
                />
              </label>
              {this.state.commentButtons ? this.showCommentButtons() : null}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;
