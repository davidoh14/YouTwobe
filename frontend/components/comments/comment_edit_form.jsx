import React from "react";
import { Button, TextField } from "@mui/material";
import { Avatar } from "@mui/material";

class CommentEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ...this.props.commentToEdit
    }

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

    console.log(window);

    return (
      <div>
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
                />
              </label>

              {this.props.errors ? 
                  console.log(this.props.errors[0])
                : null}

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
                {/* <Button
                  sx={{
                    backgroundColor: "grey",
                  }}
                  variant="contained"
                  onClick={this.handleSubmit}
                >
                  SAVE
                </Button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentEditForm;
