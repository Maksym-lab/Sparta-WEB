import styled from 'styled-components';
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  height: 142px;
  padding: 0 3%;
`;
export const MapIcon = styled.img`
  cursor: pointer;
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 17px;
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
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 13px auto 0 auto;
  width: 100%;
  max-width: 500px;
  height: 36px;
  border: 1px solid #333333;
  border-radius: 68px;
  background: #f2f2f2;
  font-size: 18px;
  color: #262526;
  & input {
    width: 80%;
    border: none;
    background: transparent;
    outline: none;
    font-size: 10px;
  }
  & svg:first-child {
    font-size: 18px;
    margin-left: 10px;
  }
`;
