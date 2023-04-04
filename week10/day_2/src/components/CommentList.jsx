import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => (
  <ListGroup className="mt-2 mb-3">
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
);

export default CommentList;
