import styled from 'styled-components';
export const Container = styled.div`
  width: ${({ theme }) => theme.mobileContainerCarrousel};
  margin: ${({ theme }) => theme.size0} auto;
  & .carousel-prev,
  .carousel-next {
    color: ${({ theme }) => theme.darkGray};
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
  width: 100px;
  height: 100px;
  margin: 0 10px;
  & img {
    width: 100px;
    height: 100px;
    margin: 0 10px;
  }
`;
