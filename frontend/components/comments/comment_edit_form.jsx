import React from "react";
import { Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";
import ColorAvatar from "../avatar/color_avatar";

class CommentEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ...this.props.commentToEdit
    }

    this.ogBody = this.state.body

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.reviseComment(this.state).then(() => this.props.cancelEdit());
  }

  handleCancel(e) {
    e.preventDefault();

    this.props.cancelEdit();
  }

  render() {
    return (
      <div>
        <div className="add-comment">
          <ColorAvatar username={this.props.username} />
          <div className="comment-form-and-buttons">
            <form className="comment-form">
              <label>
                <input
                  type="text"
                  className="comment-input"
                  value={this.state.body}
                  placeholder={"Add a public comment..."}
                  onChange={this.update("body")}
                />
              </label>

              <div className="comment-buttons">
                <Button
                  sx={{
                    color: "grey",
                  }}
                  onClick={this.handleCancel}
                >
                  CANCEL
                </Button>
                
                {(this.state.body === "") || (this.state.body === this.ogBody) ? (
                  <Button
                    sx={{
                      backgroundColor: "grey",
                    }}
                    variant="contained"
                    onClick={this.handleSubmit}
                    disabled
                  >
                    SAVE
                  </Button>
                ) : (
                  <Button
                    sx={{
                      backgroundColor: "grey",
                    }}
                    variant="contained"
                    onClick={this.handleSubmit}
                  >
                    SAVE
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentEditForm;
