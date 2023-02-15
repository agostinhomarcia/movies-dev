import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../../assets/image-star.svg'
import * as C from './style'

function Movie() {
    const responsive = {
        
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };
    return (
        <C.Container>
            <C.Text>Movies</C.Text>
            <Carousel responsive={responsive}>
                <C.Movie src={Image} alt='image-movie'/>
                
            </Carousel>
        </C.Container>
    )
}

export default Movie