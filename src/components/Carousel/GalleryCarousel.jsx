import { useRef } from 'react';
import Slider from 'react-slick';

export const galleryCarouselSettings = {
  dots: true,
  infinite: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3, // Altere conforme necessário para a galeria do perfil
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const useGalleryCarousel = () => {
  const sliderRef = useRef(null);

  const GalleryCarousel = ({ children }) => (
    <Slider {...galleryCarouselSettings} ref={sliderRef}>
      {children}
    </Slider>
  );

  return { sliderRef, GalleryCarousel };
};
