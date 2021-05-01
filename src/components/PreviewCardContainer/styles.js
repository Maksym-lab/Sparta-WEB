import styled from 'styled-components';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 305px);
  column-gap: 8px;
  row-gap: 3vw;
  justify-content: space-around;
  max-width: 648px;
  margin: -32px auto 0;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, 319px);
    row-gap: 35px;
    justify-content: space-between;
    margin: -22px auto 0;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(auto-fill, 414px);
    max-width: 875px;
    margin: -80px auto 0;
  }
`;
export default Grid;
