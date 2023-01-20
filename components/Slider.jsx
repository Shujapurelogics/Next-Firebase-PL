import { useEffect } from 'react';

import {Container, Row, Col, Button} from 'reactstrap';

const Slider = () => {

  return (
    <Container className="c-container">
        <div>
            <div>
                <img src="/Slider.svg" alt="slider"/>
            </div>
            <div className='bottom-section'>
                <div className='logo-text-combined'>
                    <h3 className='logo-text-1 custom-size'>anime</h3>
                    <h3 className='logo-text-2 custom-size '>yabu.</h3>
                </div>
                <p className='slider-text'>
                    Assista animes online em HD, legendado ou dublado,no seu celular ou computador. 
                    <strong>Animeyabu, o seu portal de animes online!</strong>
                </p>
            </div>
        </div>
    </Container>
  )
}

export default Slider;
