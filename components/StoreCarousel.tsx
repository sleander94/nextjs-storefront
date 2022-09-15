import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import StoreCarouselLink from './StoreCarouselLink';

const StoreCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <section id="store-carousel">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        deviceType={'desktop'}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
      >
        <StoreCarouselLink
          src="/../public/images/carousel-flower.jpg"
          alt="cannabis flower in a glass jar"
          label="Flower"
          href=""
        />
        <StoreCarouselLink
          src="/../public/images/carousel-wax.jpg"
          alt="wax cannabis concentrate"
          label="Concentrates"
          href=""
        />
        <StoreCarouselLink
          src="/../public/images/carousel-edibles.jpg"
          alt="cannabis cookies next to nug"
          label="Edibles"
          href=""
        />
        <StoreCarouselLink
          src="/../public/images/carousel-preroll.jpg"
          alt="pre-rolled blunt"
          label="Pre-rolls"
          href=""
          position="20% 0%"
        />
        <StoreCarouselLink
          src="/../public/images/carousel-glass.jpg"
          alt="Honeycomb bong"
          label="Glass"
          href=""
        />
      </Carousel>
    </section>
  );
};

export default StoreCarousel;
