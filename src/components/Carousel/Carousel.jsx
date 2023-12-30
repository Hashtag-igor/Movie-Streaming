import { useRef } from 'react';
import Slider from 'react-slick';

export const carouselSettings = {
  default: {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  },
  
  cast: {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
  
  gallery: {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 5, 
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  },
};

export const useCarousel = () => {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  
  const Carousel = ({ children, slidesToShow }) => (
    <Slider {...carouselSettings.default} slidesToShow={slidesToShow} ref={sliderRef}>
      {children}
    </Slider>
  );

  return { sliderRef, nextSlide, prevSlide, Carousel };
};