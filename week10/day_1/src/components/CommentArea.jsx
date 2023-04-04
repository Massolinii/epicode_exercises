import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import AddComment from "./AddComment";

const CommentArea = ({ bookAsin }) => {
  const [comments, setComments] = useState([]);

  const myAuth =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhY2RmNzY4MzQzMTAwMTRkZWE3ODYiLCJpYXQiOjE2ODA1MjY4NjMsImV4cCI6MTY4MTczNjQ2M30.FDfgzJ_h12manMK6eSxbniE_d-EdSNZD7Vt6OkDqhKs";
  const myUrl = "https://striveschool-api.herokuapp.com/api/comments/";

  const getComments = async (elementId) => {
    try {
      const response = await fetch(`${myUrl}${elementId}`, {
        headers: {
          Authorization: myAuth,
        },
      });
      if (response.ok) {
        const myComments = await response.json();
        if (myComments) {
          setComments(myComments);
        }
      } else {
        console.log("ERROR: Something went wrong in the API call");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments(bookAsin);
  }, [bookAsin]);

  return (
    <div>
      <ListGroup>
        {comments.map((comment) => {
          return (
            <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
          );
        })}
      </ListGroup>
      <AddComment setComments={setComments} bookAsin={bookAsin} />
    </div>
  );
};

export default CommentArea;
