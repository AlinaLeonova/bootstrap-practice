import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand>
            {/* <img src="" alt="logo"/> */}
            LOGO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/about'>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='contacts'>Contacts</Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant='primary' className='mr-2'>Sign In</Button>
              <Button variant='secondary'>Sign Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar