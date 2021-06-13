import styled from 'styled-components';
export const SearchContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: ${({ theme }) => theme.searchHeightContainer};;
  margin-top: ${({ theme }) => theme.size32};
  padding: ${({ theme }) => theme.size0} 3%;
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    margin-top: ${({ theme }) => theme.size40};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    height: ${({ theme }) => theme.searchHeightDesktop};
    margin-top: ${({ theme }) => theme.size46};
  }
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin: ${({ theme }) => theme.size12} auto ${({ theme }) => theme.size0} auto;
  width: ${({ theme }) => theme.pct100};
  max-width: ${({ theme }) => theme.cardsContainerTablet};
  height: ${({ theme }) => theme.size36};
  border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.black};
  border-radius: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size16});
  background: ${({ theme }) => theme.white};
  font-size: ${({ theme }) => theme.size18};
  color: ${({ theme }) => theme.darkGray};
  & input {
    width: -webkit-fill-available;
    border: none;
    background: transparent;
    outline: none;
    font-size: ${({ theme }) => theme.size10};
  }
  & svg:first-child {
    font-size: ${({ theme }) => theme.size12};
    margin-left: ${({ theme }) => theme.size10};
  }
  & svg:last-child {
    margin-right: ${({ theme }) => theme.size14};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    margin: ${({ theme }) => theme.size34} auto ${({ theme }) => theme.size0};
    & input {
      font-size: ${({ theme }) => theme.size12};
    }
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${({ theme }) => theme.pct100};
  max-width: ${({ theme }) => theme.cardsContainerTablet};
  margin: ${({ theme }) => theme.size16} auto ${({ theme }) => theme.size0};
  div {
    display: flex;
  }
  button {
    display: flex;
    margin-right: ${({ theme }) => theme.size4};
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.white};
    border-radius: ${({ theme }) => theme.radiusBtn};
    padding: ${({ theme }) => theme.size6} ${({ theme }) => theme.size4} ${({ theme }) => theme.size6} ${({ theme }) => theme.size6};
    background: transparent;
    cursor: pointer;
    font-size: ${({ theme }) => theme.size10};
    color: ${({ theme }) => theme.white};
    outline: none;
  }
`;
export const ImageDown = styled.img`
  align-self: center;
  margin-left: ${({ theme }) => theme.size8};
`;
export const MapIcon = styled.img`
  cursor: pointer;
`;
