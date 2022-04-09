import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

const StyledCarousel = styled(Carousel)`
  position: relative;
  .carousel-caption {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 40%;
  }
  .carousel-caption p {
    text-transform: capitalize;
    font-size: 2.5vw;
    color: black;
  }
  .btn-danger {
    text-transform: uppercase;
    font-size: 1vw;
    padding: 0.5vw 2vw;
  }
`;

const carousel = ({ cards }) => {
  return (
    <StyledCarousel>
      {cards.map((item, index) => (

        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item.image} alt="First slide" />
          <Carousel.Caption>
            <p>{item.description}</p>
            <Link to="/services">
              <Button variant="danger">Book Now</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </StyledCarousel>
  );
};

export default carousel;
