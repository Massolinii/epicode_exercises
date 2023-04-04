import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  myAuth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhY2RmNzY4MzQzMTAwMTRkZWE3ODYiLCJpYXQiOjE2ODA1MjY4NjMsImV4cCI6MTY4MTczNjQ2M30.FDfgzJ_h12manMK6eSxbniE_d-EdSNZD7Vt6OkDqhKs";
  myUrl = "https://striveschool-api.herokuapp.com/api/comments/";

  getComments = async (elementId) => {
    try {
      let response = await fetch(`${this.myUrl}${elementId}`, {
        headers: {
          Authorization: this.myAuth,
        },
      });
      if (response.ok) {
        let myComments = await response.json();
        if (myComments) {
          this.setState({ comments: myComments }, () => {
            console.log(this.state.comments);
          });

          console.log(this.state.comments);
          console.log(myComments);
        }
      } else {
        console.log("ERROR : Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async componentDidMount() {
    await this.getComments(this.props.bookAsin);
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.state.comments.map((comment) => {
            return (
              <ListGroup.Item key={comment._id}>
                {comment.comment}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
        <AddComment />
      </div>
    );
  }
}

export default CommentArea;
