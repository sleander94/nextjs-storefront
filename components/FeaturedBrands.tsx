import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselBrand from './CarouselBrand';

const FeaturedBrands = () => {
  const responsive = {
    wideDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <section id="featured-brands">
      <h2>We Proudly Carry:</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop', 'wideDesktop']}
        deviceType={'desktop'}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item"
      >
        <CarouselBrand
          src="710-logo.png"
          alt="710 logo"
          name="710 Labs"
          filter="invert(100%) sepia(0%) saturate(7483%) hue-rotate(238deg) brightness(105%) contrast(105%)"
        />
        <CarouselBrand
          src="snaxland-logo.webp"
          alt="snackland logo"
          name="Snaxland"
        />
        <CarouselBrand
          src="lazercat-logo.png"
          alt="Lazercat logo"
          name="Lazercat"
        />
        <CarouselBrand src="wana-logo.png" alt="Wana logo" name="Wana" />
        <CarouselBrand
          src="greendot-logo.webp"
          alt="Green Dot logo"
          name="Green Dot"
        />
        <CarouselBrand
          src="binkse-logo.png"
          alt="Binkse logo"
          name="Binkse"
          filter="invert(99%) sepia(2%) saturate(14%) hue-rotate(188deg) brightness(106%) contrast(100%)"
        />
      </Carousel>
      <h2>And many more!</h2>
    </section>
  );
};

export default FeaturedBrands;
