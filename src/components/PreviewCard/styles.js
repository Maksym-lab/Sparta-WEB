import styled from 'styled-components';
export const Article = styled.article`
  border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.lightGray};
  border-radius: ${({ theme }) => theme.size14};
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.size100};
  min-height: ${({ theme }) => theme.size100};
  background-color: ${({ theme }) => theme.white};
  cursor: pointer;
  &:hover{
    transform: scale(1.025);
    background:${({ theme }) => theme.absoluteWhite};
  }
  &:focus{
    outline:1px solid ${({ theme }) => theme.blue}
  }
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    height: ${({ theme }) => theme.cardHeightTablet};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    height: ${({ theme }) => theme.cardHeightDesktop};
  }
`;
export const Container = styled.div`
  display: flex;
  height: 100%;
`;
export const ContainerImage = styled.figure`
  position: relative;
  height: inherit;
  min-width: ${({ theme }) => theme.size100};
  width: -webkit-fill-available;
`;
export const ContainerHost = styled.div`
  display: flex;
  margin-bottom: ${({ theme }) => theme.size4};
`;
export const OverlayHeart = styled.div`
  position: absolute;
  right: ${({ theme }) => theme.size6};
  top: ${({ theme }) => theme.size6};
`;
export const ImageHeart = styled.img`
  width: ${({ theme }) => theme.pct100};
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    width: ${({ theme }) => theme.size14};
  }
`;
export const ImageHost = styled.img`
  width: ${({ theme }) => theme.size22};
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    width: ${({ theme }) => theme.size28};
  }
`;
export const ImageRoom = styled.img`
  -webkit-box-shadow: ${({ theme }) => theme.size14} ${({ theme }) => theme.size0} ${({ theme }) => theme.size6} -9px ${({ theme }) => theme.white};
  -moz-box-shadow: ${({ theme }) => theme.size14} ${({ theme }) => theme.size0} ${({ theme }) => theme.size6} -9px ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.size14} ${({ theme }) => theme.size0} ${({ theme }) => theme.size6} -9px ${({ theme }) => theme.white};
  border-radius: ${({ theme }) => theme.size8};
  height: ${({ theme }) => theme.pct100};
  width: 100%;
  object-fit: cover;
`;
export const OverlayHost = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.size6};
  right: ${({ theme }) => theme.size6};
`;
export const HostName = styled.p`
  align-self: flex-end;
  margin: ${({ theme }) => theme.size0};
  font-size: ${({ theme }) => theme.size8};
  font-weight: ${({ theme }) => theme.regular};
  text-shadow: 1px 1px 2px black;
  color: ${({ theme }) => theme.white};
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size12};
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.pct100};
  padding: ${({ theme }) => theme.size6};
`;
export const Title = styled.h2`
  height: inherit;
  font-size: ${({ theme }) => theme.size10};
  margin: ${({ theme }) => theme.size6} 0;
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.size12};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size14};
  }
`;
export const Availability = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ theme }) => theme.pct100};
  height: ${({ theme }) => theme.size14};
  color: ${({ theme }) => theme.darkGray};
`;
export const Available = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.size10};
  font-weight: 500;
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.size12};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size14};
  }
`;
export const Price = styled.strong`
  margin: ${({ theme }) => theme.size0};;
  font-size: ${({ theme }) => theme.size10};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.size12};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size14};
  }
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.pct100};
  @media screen and (min-width: ${({ theme }) => theme.tablet}) {
    width: ${({ theme }) => theme.ptc100};
  }
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    margin-top: ${({ theme }) => theme.size14};
  }
`;
export const AddressTitle = styled.p`
  margin: ${({ theme }) => theme.size0};
  font-size: ${({ theme }) => theme.size10};
  font-weight: ${({ theme }) => theme.bold};
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size12};
  }
`;
export const Address = styled.p`
  margin: ${({ theme }) => theme.size0};
  font-size: ${({ theme }) => theme.size8};
  @media screen and (min-width: ${({ theme }) => theme.desktop1024}) {
    font-size: ${({ theme }) => theme.size14};
  }
`;
