import styled from 'styled-components';
const BadgeContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  & i {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 48px;
    width: 48px;
    background: #EB5757;
    font-size: 22px;
    color: white;
  }
  & h4 {
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    & i {
      height: 55px;
      width: 55px;
      font-size: 30px;
    }
    & h4 {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 1024px) {
    & i {
      height: 67px;
      width: 67px;
      font-size: 40px;
    }
    & h4 {
      font-size: 18px;
    }
  }
`;
export default BadgeContainer;
