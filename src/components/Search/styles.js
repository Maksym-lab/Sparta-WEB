import styled from 'styled-components';
export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 142px;
  margin-top: 32px;
  padding: 0 3%;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
  @media screen and (min-width: 1024px) {
    height: 240px;
    margin-top: 46px;
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 13px auto 0 auto;
  width: 100%;
  max-width: 648px;
  height: 36px;
  border: 1px solid #333333;
  border-radius: 68px;
  background: #f2f2f2;
  font-size: 18px;
  color: #262526;
  & input {
    width: -webkit-fill-available;
    border: none;
    background: transparent;
    outline: none;
    font-size: 10px;
  }
  & svg:first-child {
    font-size: 13px;
    margin-left: 10px;
  }
  & svg:last-child {
    margin-right: 15px;
  }
  @media screen and (min-width: 1024px) {
    margin: 35px auto 0;
    & input {
      font-size: 12px;
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 648px;
  margin: 17px auto 0;
  div {
    display: flex;
  }
  button {
    display: flex;
    margin-right: 4px;
    border: 0.5px solid white;
    border-radius: 3px;
    padding: 6px 4px 6px 6px;
    background: transparent;
    cursor: pointer;
    font-size: 10px;
    color: white;
    outline: none;
  }
`;
export const ImageDown = styled.img`
  align-self: center;
  margin-left: 8px;
`;
export const MapIcon = styled.img`
  cursor: pointer;
`;
