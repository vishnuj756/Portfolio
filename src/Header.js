import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DownButton from './DownloadButton';
import { NavLink } from 'react-router-dom';
import Resume from "./Resume/Resume.pdf"

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="md" variant="dark" className='fixed-top'>
      <Container fluid>
        <Navbar.Brand href="#">Vishal Resume</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav className="my-2 my-lg-0 "  navbarScroll>
            <div className="nav12 me-4 mb-md-0 mb-4 d-flex flex-column flex-md-row d-md-flex ">
              <NavLink to="/" > Introduction </NavLink>
              <NavLink to="/about"> About </NavLink>
              <NavLink to="/review"> Review</NavLink>
              <NavLink to="/contact">Contact </NavLink>
            </div>
          </Nav>
          <Form className="d-flex">
      <a href={Resume} target='blank'><DownButton/></a>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
