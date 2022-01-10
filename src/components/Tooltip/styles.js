import styled from 'styled-components';
export const Cursor = styled.span`
  cursor: pointer;
  span {
    display: none;
  }
  &:hover {
    span {
      z-index: 2;
      position: absolute;
      display: block;
      margin-top: -36px;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      border: 1px solid #8c8979;
      border-radius: 8px;
      max-width: 200px;
      padding: 8px;
      background: #f6f6f6;
    }
  }
`;
export const Relative = styled.div`
  position: relative;
`;
