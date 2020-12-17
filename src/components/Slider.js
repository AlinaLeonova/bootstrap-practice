import React from 'react';
import image1 from '../images/pexels-andre-furtado-1162251.jpg';
import image2 from '../images/pexels-johannes-plenio-1118869.jpg';
import image3 from '../images/pexels-johannes-plenio-1118873.jpg';
import image4 from '../images/pexels-pixabay-99577.jpg';
import { Carousel } from 'react-bootstrap'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item >
        <img src={image1} alt='img1' className='d-block h-2' />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsam accusantium vitae quidem optio unde.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image2} alt='img1' className='d-block h-2' />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsam accusantium vitae quidem optio unde.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} alt='img1' className='d-block h-2' />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsam accusantium vitae quidem optio unde.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image4} alt='img1' className='d-block h-2' />
        <Carousel.Caption>
          <h3>Title</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsam accusantium vitae quidem optio unde.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider
