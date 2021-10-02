import styled from 'styled-components';
export const Section = styled.span`
  position: fixed;
  z-index: 4;
  top: ${({ theme }) => theme.pct20};
  left: 3%;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    top: ${({ theme }) => theme.pct20};
    left: ${({ theme }) => theme.pct50};
    width: ${({ theme }) => theme.cardsContainerTablet};
    margin-left: -335px;
  }
  @media (min-width: ${({ theme }) => theme.desktop1024}) {
    top: ${({ theme }) => theme.pct20};
    left: ${({ theme }) => theme.pct50};
    width: 600px;
    margin-left: -300px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: ${({ theme }) => theme.shadow1};
  -moz-box-shadow: ${({ theme }) => theme.shadow1};
  box-shadow: ${({ theme }) => theme.shadow1};
  width: 93%;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    width: ${({ theme }) => theme.cardsContainerTablet};
  }
  @media (min-width: ${({ theme }) => theme.desktop1024}) {
    width: ${({ theme }) => theme.cardsContainerTablet};
  }
  height: 405px;
  border-radius: ${({ theme }) => theme.size8};
`;
export const BlackBackground = styled.span`
  position: fixed;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;
export const Logo = styled.img`
  position: absolute;
  top: ${({ theme }) => theme.size14};;
  left: ${({ theme }) => theme.size14};;
  width: ${({ theme }) => theme.pct20};
`;
export const CloseModal = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.size14};;
  right: ${({ theme }) => theme.size14};;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.white};
  }
  &:hover, &:active, &:focus{
    background: ${({ theme }) => theme.black};
    border-radius:${({ theme }) => theme.radiusCircle};;
    width:${({ theme }) => theme.size20};;
    height:${({ theme }) => theme.size20};;
    padding:2px;
    outline:none;
  }
`;
export const Content = styled.div`
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  width: 260px;
  text-align: center;
  h2 {
    font-size: 1.2em;
    font-weight: ${({ theme }) => theme.regular};
    color: white;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    border: none;
    border-radius: ${({ theme }) => theme.radiusBtn};
    width: 140px;
    height: ${({ theme }) => theme.size40};
    background-color: ${({ theme }) => theme.red};
    cursor: pointer;
    font-size: 1em;
    font-weight: ${({ theme }) => theme.bold};
    color: black;
    &:hover, &:active, &:focus{
      background:#ff555e;
    }
  }
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: ${({ theme }) => theme.size16};;
  margin: ${({ theme }) => theme.size30} 0;
  div {
    margin: auto;
    text-align: center;
  }
  p {
    cursor: pointer;
    font-size: 1em;
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.white};
  }
`;
export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => theme.size36};
  height: ${({ theme }) => theme.size36};
  border-radius: ${({ theme }) => theme.radiusCircle};
  background-color: ${({ theme }) => theme.black};
  svg {
    font-size: 1.3em;
    cursor: pointer;
    color: ${({ theme }) => theme.white};
  }
`;
