import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card
        className={`bgCard h-100 d-flex flex-column ${selected ? 'border border-danger' : ''}`}
        onClick={() => this.setState({ selected: !selected })}
      >
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          className="flex-grow-1"
          key={book.asin}
        />
        <Card.Body className="d-flex flex-column p-1 pt-3">
          <Card.Title className="fs-6">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;