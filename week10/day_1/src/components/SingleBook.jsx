import React, { Component } from "react";
import { Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        className={`bgCard h-100 d-flex flex-column ${
          selected ? "border border-danger" : ""
        }`}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          key={book.asin}
          onClick={() => this.setState({ selected: !selected })}
        />
        <Card.Body className="d-flex flex-column p-1 pt-3">
          <Card.Title className="fs-6">{book.title}</Card.Title>
          {selected && <CommentArea bookAsin={book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
