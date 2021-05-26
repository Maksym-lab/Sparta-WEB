import styled from 'styled-components';
export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: -50px;
  & .carousel-prev,
  .carousel-next {
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
    width: 90%;
  }
`;
