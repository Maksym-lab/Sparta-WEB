import styled from 'styled-components';
export const Icons = styled.div`
  display: flex;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.borderB} solid ${({ theme }) => theme.lightGray};
  border-radius: ${({ theme }) => theme.size14};
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.size100};
  margin-top: ${({ theme }) => theme.size16};
  font-size: ${({ theme }) => theme.size26};
  color: ${({ theme }) => theme.darkGray};
  cursor: pointer;
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    height: ${({ theme }) => theme.cardHeightTablet};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    height: ${({ theme }) => theme.cardHeightDesktop};
  }
`;
