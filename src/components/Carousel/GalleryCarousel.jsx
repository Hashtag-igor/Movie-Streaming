import { useRef, useEffect } from 'react';
import Slider from 'react-slick';

export const galleryCarouselSettings = {
  dots: window.innerWidth >= 400, // Mostrar dots apenas para telas maiores ou iguais a 400px
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
        dots: window.innerWidth >= 400, // Adiciona a lógica para ocultar dots abaixo de 400px
      },
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: window.innerWidth >= 400, // Adiciona a lógica para ocultar dots abaixo de 400px
      },
    },
  ],
};

export const useGalleryCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 400;
      
      // Verifica se sliderRef e sliderRef.current existem antes de chamar o método
      if (sliderRef && sliderRef.current && sliderRef.current.slick) {
        sliderRef.current.slick.slickSetOption('dots', !isMobile, true);
      }
    };
  
    handleResize(); // Configura inicialmente com base no tamanho da tela
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [sliderRef]);
  
  
  

  const GalleryCarousel = ({ children }) => (
    <Slider {...galleryCarouselSettings} ref={sliderRef}>
      {children}
    </Slider>
  );

  return { GalleryCarousel };
};
