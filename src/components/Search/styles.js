import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 293px;
  height: 36px;
  border: 1px solid #333333;
  border-radius: 68px;
  background: #f2f2f2;
  font-size: 20px;
  color: #262526;
  & input {
    width: 80%;
    border: none;
    background: transparent;
    outline: none;
  }
  & svg:first-child {
    font-size: 14px;
    margin-left: 10px;
  }
`
