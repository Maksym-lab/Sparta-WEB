import styled from 'styled-components';
export const Container = styled.div`
  width: ${({ theme }) => theme.mobileContainerCarrousel};
  margin: ${({ theme }) => theme.size0} auto;
  & .carousel-prev, .carousel-next {
    color: ${({ theme }) => theme.darkGray};;
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
    width: calc(${({ theme }) => theme.size50}+ ${({ theme }) => theme.size5});
  }
`;
