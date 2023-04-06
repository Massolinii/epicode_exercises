import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const API_URL = "https://striveschool-api.herokuapp.com/api/comments/";

const AddComment = ({ bookAsin }) => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: bookAsin,
  });

  const postComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhZDA4YjY4MzQzMTAwMTRkZWE3OGQiLCJpYXQiOjE2ODA1Mjc0OTksImV4cCI6MTY4MTczNzA5OX0.Zg-_qRAESiz64rLknV3mP89OJYAHFfGo8EY6TkaugrU",
        },
        body: JSON.stringify(comment),
      });
      if (response.ok) {
        alert("Comment successfully sent!");
        setComment({
          comment: "",
          rate: 1,
          elementId: bookAsin,
        });
      } else {
        console.log("error");
        alert("Comment was NOT sent.");
      }
      return response.json();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <Form onSubmit={postComment}>
      <Form.Group className="my-3">
        <Form.Label>Comment :</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your comment"
          value={comment.comment}
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        />
      </Form.Group>

      <Form.Group className="my-3">
        <Form.Label>Rating</Form.Label>
        <Form.Control
          type="number"
          min={0}
          max={5}
          placeholder="0 - 5"
          value={comment.rate}
          onChange={(e) => setComment({ ...comment, rate: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Comment
      </Button>
    </Form>
  );
};

export default AddComment;
