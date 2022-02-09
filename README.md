# YouTwobe
![home](https://user-images.githubusercontent.com/86807281/153288400-d2f11976-2c9c-4067-a823-c8a1936cb84d.gif)

[Link](https://youtwobe3.herokuapp.com/)

## Summary
YouTwobe is a video-sharing, social platform that allows anyone to express their creativity, share a moment, or interact with other people's content. It allows users to upload and delete videos, as well as comments. 

## Technologies Used
* React / Redux
* Ruby on Rails
* Javascript
* Postgresql
* HTML / CSS
* Heroku / Git

## Highlight Features


## Comments
![comment](https://user-images.githubusercontent.com/86807281/153288448-d3c66557-5ae7-42f0-b411-27418832c282.gif)

The comments section was an interesting challenge that exposed me to the intricacies of the React lifecycles and the considerations you have to make with multiple components on the same screen. I organized the comments under an overarching comments section, with an input form to create a comment as a child component, and an index that renders all comments with a foreign key matching the video's primary key. 

However, posting a new comment did not automatically trigger the comment index to re-render. In this case, I had to create conditionals on the commments section parent component to re-fetch all comments on the slice-of-state change of the comments length, which becomes increased by the comment form input. 

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

I would later on learn React hooks, which allowed me to refactor this code into clean useEffect methods that replaced both the componentDidMount and the componentDidUpdate.

```
  useEffect(() => {
      fetchAllComments(videoId)
  }, [videoId])

```

Displaying/editing of comments was enabled through the useState hook to conditionally display a comment, or the edit form of that comment within the same component. I passed down the method that changes the slice of state of the useState hook from the parent component, comment item, as a prop to the child component, comment edit form. That way, the child component can simply call this method to change the state of the parent component, and cause a re-render of itself into an edit form of the comment.
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
![upload](https://user-images.githubusercontent.com/86807281/153288514-622c6e34-5a14-495d-9219-c86db500a397.gif)

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



