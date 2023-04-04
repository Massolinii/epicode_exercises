import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjMWVjODBlNzg3MDAwMTRkODkzMDEiLCJpYXQiOjE2ODA2MTMwNjQsImV4cCI6MTY4MTgyMjY2NH0.gjGW6RQYF0y_tmV_YsE7tluLnxyakbzFTKnNOu5XqCA",
          },
        }
      );
      if (response.ok) {
        alert("Comment was deleted successfully!");
      } else {
        alert("Error - comment was NOT deleted!");
      }
    } catch (error) {
      alert("Error - comment was NOT deleted!");
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button
        variant="danger"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;
