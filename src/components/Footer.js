import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#212529", color: '#fff', display: 'flex', flex: '0 0 auto' }}>
      <Container
        style={{
          display: 'flex',
          jystifyContent: 'center',
          paddingTop: '30px'

        }}
      >
        <p> &copy; Alina L 2020 </p>
      </Container>
    </Container>
  )

}

export default Footer