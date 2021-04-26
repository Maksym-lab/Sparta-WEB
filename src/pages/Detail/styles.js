import styled from 'styled-components';
export const MainImage = styled.div`
  width: 100%;
  img {
    width: 100%;
  }
`;
export const CarouselContainer = styled.div`
  margin: auto;
  margin-top: -35px;
  width: 100%;
  max-width: 90%;
`;
export const Container = styled.div`
  margin: auto;
  max-width: 90%;
`;
export const FirstContactInfo = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  color: #404040;
  p {
    font-size: 10px;
  }
  div:nth-child(1) {
    height: 100%;
  }
`;
export const Social = styled.div`
  text-align: end;
  div {
    display: flex;
    justify-content: flex-end;
    p {
      margin-right: 8px;
    }
  }
`;
export const Host = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    width: 27px;
    height: 27px;
  }
  p {
    margin-left: 5px;
    font-size: 12px;
    font-weight: bold;
    color: #000000;
  }
`;
export const Title = styled.div`
  h1 {
    font-size: 16px;
  }
`;
export const Hr = styled.div`
  margin: 25px 0;
  border: 0.25px solid #a7a7a7;
`;
export const Address = styled.address`
  display: flex;
  flex-direction: column;
  p {
    margin: 7px 0;
  }
`;
export const Red = styled.p`
  color: #eb5757;
`;
export const Subtitle = styled.p`
  font-weight: bold;
  color: #404040;
`;
export const Section = styled.div`
  p {
    font-size: 12px;
    color: #404040;
  }
`;
export const GridIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  p {
    margin: 0;
    text-align: center;
    font-size: 10px;
    font-weight: bold;
  }
`;
export const GridEach = styled.div`
  display: grid;
  grid-template-columns: [one] 1fr [two] 1fr [tree] 1fr [four] 1fr [five] 1fr [six] 1fr [seven] 1fr [eight] 1fr [nine] 1fr [ten];
  grid-template-rows: [oneRow] 1fr [twoRow] 1fr [treeRow] 1fr [fourRow] 1fr [fiveRow] 1fr [sixRow] 1fr [sevenRow] 1fr [eightRow] 1fr [nineRow] 1fr [tenRow] 1fr [elevenRow] 1fr [twelveRow];
  img:nth-child(1) {
    grid-column-start: one;
    grid-column-end: ten;
    grid-row-start: oneRow;
    grid-row-end: tenRow;
    width: 100%;
  }
  img:nth-child(2) {
    grid-column-start: nine;
    grid-column-end: ten;
    grid-row-start: tenRow;
    grid-row-end: twelveRow;
    width: 150%;
    cursor: pointer;
  }
`;
export const TagsInterest = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  div {
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border: 0.5px solid #8c8979;
    border-radius: 3.34524px;
    padding: 5%;
    background-color: #f6f6f6;
    font-weight: bold;
    font-size: 8px;
    text-align: center;
  }
`;
export const ContactButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 64px 5%;
  text-align: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #404040;
    border-radius: 3.5px;
    width: 100%;
    height: 32px;
    background-color: #eb5757;
    color: white;
    outline: none;
    img {
      margin-right: 5px;
    }
  }
  p {
    font-size: 10px;
    color: #404040;
  }
`;
