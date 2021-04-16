import styled from 'styled-components';
export const Container = styled.div`
  width: 281px;
  margin: 0 auto;
  & .carousel-prev, .carousel-next {
    color: darkslategrey;
    width: 3rem;
  }
  & .carousel-prev {
    left: -1.08rem;
  }
  & .carousel-next {
    right: -1.08rem;
  }
`;
export const Img = styled.figure`
  & img {
    width: 55px;
  }
`;
