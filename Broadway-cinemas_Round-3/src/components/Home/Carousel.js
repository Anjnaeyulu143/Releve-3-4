import React, { useEffect, useRef } from 'react';
// import Slider from 'react-slick';
import movies from '../../data/movies.json';
import styles from './Carousel.module.css';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    showArrows: true,
    centerMode: true
}

const Carousel = () => {

    const sliderRef = useRef();

    useEffect(()=>{
        sliderRef.current.scrollLeft -= 350;
    },[])

    return (  
        <div className={styles['slider']} ref={sliderRef}>
            {/* <span className={styles['arrow']}><ArrowBackIosIcon /> </span> */}
            {movies.movies.map((movie)=>(
                <div className={styles['poster']}>
                    <img src={movie.img.large} width='100%' height='100%' />
                </div>
            ))}
            {/* <span className={styles['arrow']}><ArrowForwardIosIcon /></span> */}
        </div>
    );
}
 

export default Carousel;