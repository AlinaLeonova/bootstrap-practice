import React from 'react';
import { Jumbotron as Jumbo } from 'react-bootstrap';
import styled from 'styled-components'
import image1 from '../images/pexels-andre-furtado-1162251.jpg';
// import image2 from '../images/pexels-johannes-plenio-1118869.jpg';
// import image3 from '../images/pexels-johannes-plenio-1118873.jpg';
// import image4 from '../images/pexels-pixabay-99577.jpg';

const Styles = styled.div`
.jumbo{
  background: url(${image1}) no-repeat fixed bottom;
  background-size: cover;
  color: #efefef;
  height: 600px;
  position: relative;
  z-index: -2;
}
.overlay{
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.8;
}
`

const Jumbotron = () => {
  return (

    <Styles>
      <Jumbo fluid className="jumbo">
        <div className="overlay"></div>
      </Jumbo>
    </Styles>


  )
}

export default Jumbotron