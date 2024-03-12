import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { Image } from '@mantine/core';
import classes from './ProductCarousel.module.css';

type Props = {
  images: string[];
};

const ProductCarousel = ({ images }: Props) => {
  const slides = images.map((url, index) => (
    <Carousel.Slide key={index}>
      <Image src={url} />
    </Carousel.Slide>
  ));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Carousel
      height="100%"
      align="start"
      slideGap={0}
      controlSize={40}
      withIndicators
      loop
      style={{ flex: 1 }}
      classNames={classes}
      onClick={e => handleClick(e)}
      // onNextSlide={e => handleClick(e)}
    >
      {slides}
    </Carousel>
  );
};

export default ProductCarousel;
