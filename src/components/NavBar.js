import React, { useState } from 'react';
import { Navbar, Container, Nav, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleOpen = () => setShow(true)
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
              <Button variant='primary' className='mr-2' onClick={handleOpen}>Sign In</Button>
              <Button variant='secondary'>Sign Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Registartion
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>
                Name
              </Form.Label>
              <Form.Control type='text' placeholder="Enter your name, please" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                E-mail
              </Form.Label>
              <Form.Control type='email' placeholder="Enter your e-mail, please" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>
                Password
              </Form.Label>
              <Form.Control type='password' placeholder="Enter your password, please" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Control type='checkbox' />
              <Form.Text>Remeber me</Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavBar