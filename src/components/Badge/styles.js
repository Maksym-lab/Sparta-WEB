import styled from 'styled-components';
const BadgeContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  & i {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({ theme }) => theme.radiusCircle};
    height: ${({ theme }) => theme.size48};
    width: ${({ theme }) => theme.size48};
    background: ${({ theme }) => theme.red};
    font-size: ${({ theme }) => theme.size22};
    color: ${({ theme }) => theme.white};
  }
  & h4 {
    margin: ${({ theme }) => theme.size0};
  }
  @media screen and (min-width: 768px) {
    & i {
      height: calc(
        ${({ theme }) => theme.size50} + ${({ theme }) => theme.size4}
      );
      width: calc(
        ${({ theme }) => theme.size50} + ${({ theme }) => theme.size4}
      );
      font-size: ${({ theme }) => theme.size30};
    }
    & h4 {
      font-size: ${({ theme }) => theme.size14};
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
