import styled from 'styled-components';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.grid305});
  column-gap: ${({ theme }) => theme.size8};
  row-gap: 3vw;
  justify-content: space-around;
  max-width: ${({ theme }) => theme.cardsContainerTablet};
  margin: -60px auto ${({ theme }) => theme.size0};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.grid320});
    row-gap: ${({ theme }) => theme.size34};
    justify-content: space-between;
    margin: -60px auto ${({ theme }) => theme.size0};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.grid414});
    max-width: ${({ theme }) => theme.cardsContainerDesktop};
    margin: -120px auto ${({ theme }) => theme.size0};
  }
`;
export default Grid;
