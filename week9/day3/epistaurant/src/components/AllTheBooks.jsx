import { Component } from "react";
// le parentesi graffe servono quando dovete importare un qualcosa
// che NON È l'export di default del pacchetto

// import MIGLIORE per un componente react-bootstrap
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import fantasyColl from "../data/fantasy.json";
import historyColl from "../data/history.json";
import horrorColl from "../data/horror.json";
import romanceColl from "../data/romance.json";
import scifiColl from "../data/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container className="mt-3">
        <Row className="justify-content-evenly">

            {/*FANTASY BOOKS */}
          <Col xs={12} md={6} lg={4} className="p-4">
            <h4>Latest FANTASY Books</h4>
            <Carousel>
              {fantasyColl.map((fantasy) => {
                return (
                  <Carousel.Item key={fantasy.id}>
                    <img
                    className="d-block w-100 mx-auto text-center" src={fantasy.img} alt={fantasy.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>

              {/*HISTORY BOOKS */}
              <Col xs={12} md={6} lg={4} className="p-4">
            <h4>Latest HISTORY Books</h4>
            <Carousel>
              {historyColl.map((history) => {
                return (
                  <Carousel.Item key={history.id}>
                    <img
                    className="d-block w-100 mx-auto text-center" src={history.img} alt={history.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>

           {/*HORROR BOOKS */}
           <Col xs={12} md={6} lg={4} className="p-4">
           <h4>Latest HORROR Books</h4>
            <Carousel>
              {horrorColl.map((horror) => {
                return (
                  <Carousel.Item key={horror.id}>
                    <img
                    className="d-block w-100 mx-auto text-center" src={horror.img} alt={horror.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>

           {/*ROMANCE BOOKS */}
           <Col xs={12} md={6} lg={4} className="p-4">
           <h4>Latest ROMANCE Books</h4>
            <Carousel>
              {romanceColl.map((romance) => {
                return (
                  <Carousel.Item key={romance.id}>
                    <img
                    className="d-block w-100 mx-auto text-center" src={romance.img} alt={romance.title}
                    />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>

           {/*SCIFI BOOKS */}
           <Col xs={12} md={6} lg={4} className="p-4">
           <h4>Latest SCIFI Books</h4>
            <Carousel>
              {scifiColl.map((scifi) => {
                return (
                  <Carousel.Item key={scifi.id}>
                    <img
                    className="d-block w-100 mx-auto text-center" src={scifi.img} alt={scifi.title}
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