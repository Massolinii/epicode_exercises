import { Component } from "react";
// le parentesi graffe servono quando dovete importare un qualcosa
// che NON È l'export di default del pacchetto

// import MIGLIORE per un componente react-bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import fantasyColl from "../data/fantasy.json";
import historyColl from "../data/history.json";
import horrorColl from "../data/horror.json";
import romanceColl from "../data/romance.json";
import scifiColl from "../data/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="mt-3">
        {/*FANTASY BOOKS */}
        {/* FANTASY BOOKS */}
        <h3>Fantasy Books</h3>
        <Row className="justify-content-evenly align-items-stretch">
          {fantasyColl.map((fantasy) => {
            return (
              <Col key={fantasy.id} xs={6} sm={4} md={3} lg={2} className="mb-4 d-flex">
                <Card className="h-100 d-flex flex-column">
                  <div className="imgContainer bgCard">
                    <Card.Img
                      variant="top"
                      src={fantasy.img}
                      alt={fantasy.title}
                      className="flex-grow-1"
                    />
                  </div>

                  <Card.Body className="d-flex flex-column p-1 pt-3  bgCard">
                    <Card.Title className="fs-6">{fantasy.title}</Card.Title>
                    <Card.Text className="flex-grow-1 m-0">
                      {fantasy.price} €
                    </Card.Text>
                    <p variant="contained" size="large" className="learnMore"> Learn More </p>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/*HISTORY BOOKS */}
        <Row className="justify-content-evenly">
          <Col className="p-4">
            <h4>Latest HISTORY Books</h4>
            <Carousel>
              {historyColl.map((history) => {
                return (
                  <Carousel.Item key={history.id}>
                    <img
                      className="d-block w-100 mx-auto text-center"
                      src={history.img}
                      alt={history.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>

        <Row className="justify-content-evenly">
          {/*HORROR BOOKS */}
          <Col className="p-4">
            <h4>Latest HORROR Books</h4>
            <Carousel>
              {horrorColl.map((horror) => {
                return (
                  <Carousel.Item key={horror.id}>
                    <img
                      className="d-block w-100 mx-auto text-center"
                      src={horror.img}
                      alt={horror.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>

        {/*ROMANCE BOOKS */}
        <Row className="justify-content-evenly">
          <Col className="p-4">
            <h4>Latest ROMANCE Books</h4>
            <Carousel>
              {romanceColl.map((romance) => {
                return (
                  <Carousel.Item key={romance.id}>
                    <img
                      className="d-block w-100 mx-auto text-center"
                      src={romance.img}
                      alt={romance.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>

        {/*SCIFI BOOKS */}
        <Row className="justify-content-evenly">
          <Col className="p-4">
            <h4>Latest SCIFI Books</h4>
            <Carousel>
              {scifiColl.map((scifi) => {
                return (
                  <Carousel.Item key={scifi.id}>
                    <img
                      className="d-block w-100 mx-auto text-center"
                      src={scifi.img}
                      alt={scifi.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
