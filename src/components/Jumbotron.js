import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import banner from './subtle-prism.svg';

const Styles = styled.div`
  .jumbo {
    background: url(${banner}) no-repeat fixed bottom;
    background-size: cover;
    color: #2a2c2e;
    height: 200px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #ddd;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className='jumbo'>
      <div className='overlay' />
      <Container>
        <h1>Welcome To OneStop</h1>
        <h5>We aim to enable customers to easily find the right household services from various professional serivces providers at the single platform.</h5>
      </Container>
    </Jumbo>
  </Styles>
);
