import styled from 'styled-components';
const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.grid305});
  column-gap: ${({ theme }) => theme.size8};
  row-gap: 3vw;
  justify-content: space-around;
  max-width: ${({ theme }) => theme.cardsContainerTablet};
  margin: ${({ theme }) => `-${theme.size32}`} auto ${({ theme }) => theme.size0};
  & li {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.grid320});
    row-gap: ${({ theme }) => theme.size34};
    justify-content: space-between;
    margin: ${({ theme }) => theme.size26} auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    grid-template-columns: repeat(auto-fill, ${({ theme }) => theme.grid414});
    max-width: ${({ theme }) => theme.cardsContainerDesktop};
    margin: ${({ theme }) => theme.size40} auto;
  }
`;
export default Grid;
