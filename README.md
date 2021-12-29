[Link](https://youtwobe3.herokuapp.com/)

# Summary
YouTwobe, a YouTube clone, is an online video-sharing website where users can view, search, and upload videos. It also enables users to further interact by posting, editing, and deleting comments.  

# Technologies Used
* React / Redux
* Ruby on Rails
* Javascript
* Postgresql
* HTML / CSS
* Heroku / Git

# Highlight Features

## Comments
The comments section was an interesting challenge that exposed me to the intricacies of the React life-cycle and the considerations you have to make with multiple components on the same screen. I organized the comments under an overarching comments section, with an input form to create a comment as a child component, and a separate index that renders all comments with the appropriate foreign key that matched the video's primary key. Posting a new comment did not automatically trigger the separate comment index to re-render. In this case, I had to create conditionals on the commments section parent component to re-fetch all comments on the slice-of-state change of the comments length, which becomes increased by the comment form input.

```
    componentDidMount(){
        this.props.fetchAllComments(this.props.videoId)
    
    }

    componentDidUpdate(prevProps){
        if ((this.props.videoId !== prevProps.videoId) || (this.props.comments.length !== prevProps.comments.length)) {
            this.props.fetchAllComments(this.props.videoId)
        }
    }
```
Another challenge along the same lines was that posting a comment after changing pages, would post that comment on the previous page. It's the same issue here where the parent component re-rendered, but the comment form hadn't yet. So I used the following code to have the comment form update it's state with the proper video foreign key.
```
    currentUserAndVideoCheck(){
        if (!this.props.currentUserId) {
            this.props.history.push('/login')
        } else {
            this.setState({video_id: this.props.videoId}) 
        }
    }
```
I learned React Hooks, which made it easier to enable editing of comments through the useState hook to either display a comment, or the edit form of that comment. I passed down the method that changes the slice of state of the useState hook as a prop to the edit form component. That way, the separate edit form component can simply call this method to re-render into displaying the comment.
```
  const [editMode, setEditMode] = useState(false)
 
  let commentItemOrEdit; 

  function toggleCommentItemOrEdit() {
    if (editMode === false) {
      commentItemOrEdit = (
        <div className="comment">
          <div className="av-and-comment">
            <ColorAvatar username={comment.user.username}/>
            <div className="comment-column">
              <div className="commenter-and-date">
                <div className="commenter">{comment.user.username}</div>
                <div className="comment-date">{convertDate()}</div>
              </div>
              <div className="comment-and-buttons">
                <div className="comment-body">{comment.body}</div>
                <div className="delete-edit">{deleteAndEdit}</div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      commentItemOrEdit = (
        <CommentEditForm
          commentToEdit={comment}
          reviseComment={reviseComment}
          cancelEdit={() => setEditMode(false)}
          currentUserId={currentUserId}
          videoId={comment.videoId}
        />
      );
    }
  }

  toggleCommentItemOrEdit();

  return (
    <div>
      {commentItemOrEdit}
    </div>
  );
```

## Video Upload
Users can upload video and image files via AWS servers. It was interesting to learn the AWS-specific setup that enables the frontend file upload functions below.
```
    uploadVideo(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ video: file, videoUrl: fileReader.result});
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    uploadThumbnail(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ thumbnail: file, thumbnailUrl: fileReader.result});
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }
```
# Roadmap
* Editing videos and comments
* Likes and dislikes
* Subscriptions


