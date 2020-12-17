import React from 'react';
import Slider from '../components/Slider.js';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import image1 from '../images/pexels-andre-furtado-1162251.jpg';
import image3 from '../images/pexels-johannes-plenio-1118873.jpg';
import image4 from '../images/pexels-pixabay-99577.jpg';
import Jumbotron from '../components/Jumbotron'

const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Slider />
      <Container style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <Row style={{ marginBottom: '2rem' }}>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img src={image1} alt="img" style={{ height: '200px' }} variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsam accusantium vitae quidem optio unde.</p>
                </Card.Text>
                <Button variant='primary'>More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img src={image3} alt="img1" style={{ height: '200px' }} variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsam accusantium vitae quidem optio unde.</p>
                </Card.Text>
                <Button variant='primary'>More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }}>
              <Card.Img src={image4} alt="img1" style={{ height: '200px' }} variant="top" />
              <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsam accusantium vitae quidem optio unde.</p>
                </Card.Text>
                <Button variant='primary'>More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Jumbotron />
    </>
  )
}

export default Home;