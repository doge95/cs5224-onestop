import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg'

const Styles = styled.div`
  .navbar {
    background-color: #000;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #000;
    font-size: 1.2vw;
    &:hover {
      color: #799cfc;
    }
  }
`;

const navbar = () => {
    return (
        <Styles>
            <Navbar bg="white" variant="light">
                <Navbar.Brand as={Link} to="/">
                <img src={logo} width="30" height="30"/>
                OneStop
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="/profile">My Account</Nav.Link>
                </Nav>
            </Navbar>
        </Styles>
    )
}

export default navbar;