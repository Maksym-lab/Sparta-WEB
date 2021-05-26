import React from 'react';
import Slider from 'infinite-react-carousel';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import useResize from '../../hooks/useResize';
import { Img, Container } from './styles';
import testPhoto from '../../assets/images/TestPhotoPreviewCard.png';
const Carousel = () => {
  const [width, ref] = useResize();
  const settings = {
    className: 'carousel',
    slidesToShow: width > 1024 ? 8 : width > 768 ? 7 : width > 600 ? 6 : 4,
    initialSlide: 1,
  };
  return (
    <Container ref={ref}>
      <Slider
        {...settings}
        prevArrow={
          <MdKeyboardArrowLeft
            tabIndex="0"
            title="Arrow left"
            aria-label="Arrow left"
            alt="arrow left"
          />
        }
        nextArrow={
          <MdKeyboardArrowRight
            tabIndex="0"
            title="Arrow right"
            aria-label="Arrow right"
            alt="arrow right"
          />
        }
      >
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
        <Img>
          <img src={testPhoto} alt="room preview #" />
        </Img>
      </Slider>
    </Container>
  );
};
export default Carousel;
