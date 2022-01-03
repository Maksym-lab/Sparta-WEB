import styled from 'styled-components';
const Circle = styled.span`
  position: absolute;
  z-index: 0;
  top: 9%;
  left: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #262526;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.white};
  }
`;
export default Circle;
