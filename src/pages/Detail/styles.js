import styled from 'styled-components';
export const MainImage = styled.figure`
  position: relative;
  width: ${({ theme }) => theme.pct100};
  margin: ${({ theme }) => theme.size0} auto;
  img {
    width: ${({ theme }) => theme.pct100};
  }
  @media (min-width: 1025px) and (max-width: 1920px) {
    img {
      width: ${({ theme }) => theme.pct100};
      height: 354px;
      object-fit: cover;
    }
  }
`;
export const DetailDesktop = styled.div`
  margin: auto;
  max-width: 841px;
  @media (min-width: 1025px) {
    margin-top: -190px;
  }
`;
export const BackgroundDetailDesktop = styled.div`
  @media (max-width: ${({ theme }) => theme.desktop1024}) {
    display: none;
  }
`;
export const Hero = styled.img`
  width: ${({ theme }) => theme.pct100};
  height: 240px;
  object-fit: cover;
`;
export const OverlayPrice = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.size36};
  right: ${({ theme }) => theme.size16};
  p {
    font-size: 2em;
    font-weight: ${({ theme }) => theme.bold};;
    color: ${({ theme }) => theme.white};
    text-shadow: ${({ theme }) => theme.shadow2};
  }
`;
export const Container = styled.div`
  margin: auto;
  max-width: 90%;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.white};
    border-radius: ${({ theme }) => theme.size8};
    padding: 3%;
  }
`;
export const FirstContactInfo = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    color: ${({ theme }) => theme.darkGray};
    p {
      font-size: 1em;
    }
    div:nth-child(1) {
      height: ${({ theme }) => theme.pct100};
    }
  }
`;
export const FirstContactInfoTabAndDesktop = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    display: grid;
    align-items: center;
    grid-template-columns: ${({ theme }) => theme.pct50} 22% ${({ theme }) => theme.pct30};
    color: ${({ theme }) => theme.darkGray};
    p {
      font-size: 1.1em;
      margin: ${({ theme }) => theme.size0};;
    }
    div:nth-child(1) {
      height: ${({ theme }) => theme.pct100};
    }
  }
  @media (min-width: 1025px) {
    div:nth-child(2) {
      text-align: right;
    }
  }
`;
export const Social = styled.div`
  text-align: end;
  div {
    display: flex;
    justify-content: flex-end;
    p {
      margin-right: ${({ theme }) => theme.size8};
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.radiusBtn};
    width: ${({ theme }) => theme.pct100};
    height: ${({ theme }) => theme.size16};
    background-color: ${({ theme }) => theme.red};
    font-weight: ${({ theme }) => theme.bold};;
    color: ${({ theme }) => theme.white};
    outline: none;
    img {
      margin-right: ${({ theme }) => theme.size6};;
    }
  }
`;
export const Host = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    img {
      border-radius: ${({ theme }) => theme.radiusCircle};
      width: ${({ theme }) => theme.size26};
      height: ${({ theme }) => theme.size26};
    }
    p {
      margin-left: ${({ theme }) => theme.size6};
      font-size: 1em;
      font-weight: ${({ theme }) => theme.bold};
      color: ${({ theme }) => theme.black};
    }
  }
`;
export const HostTab = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: ${({ theme }) => theme.radiusCircle};
    width: ${({ theme }) => theme.size26};
    height: ${({ theme }) => theme.size26};
  }
  p {
    margin-left: ${({ theme }) => theme.size4};
    font-size: 1em;
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.black};
  }
`;
export const Title = styled.div`
  display: grid;
  grid-template-columns: 90% ${({ theme }) => theme.pct10};
  column-gap: ${({ theme }) => theme.size10};
  margin: ${({ theme }) => theme.size16} ${({ theme }) => theme.size0};
  h1 {
    margin: ${({ theme }) => theme.size0};
    font-size: 2em;
  }
  img {
    width: ${({ theme }) => theme.size16};
  }
  @media (min-width: 1025px) {
    margin: ${({ theme }) => theme.size30} ${({ theme }) => theme.size0};
    div:nth-child(2) {
      margin-right: ${({ theme }) => theme.size12};
      text-align: right;
    }
  }
`;
export const AddressAndReferencesDesktop = styled.address`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.size10};
    p {
      color: ${({ theme }) => theme.darkGrid};
    }
  }
`;
export const DescriptionAndImageDesktop = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, ${({ theme }) => theme.pct50});
    column-gap: ${({ theme }) => theme.size10};
    margin: ${({ theme }) => theme.size30} ${({ theme }) => theme.size0};
    img {
      width: ${({ theme }) => theme.pct100};
    }
    h3 {
      margin-top: 120px;
    }
  }
`;
export const TheRoomAndImageDesktop = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, ${({ theme }) => theme.pct50});
    column-gap: ${({ theme }) => theme.size10};
    margin: ${({ theme }) => theme.size30} ${({ theme }) => theme.size0};
  }
`;
export const AtmosphereDesktop = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, ${({ theme }) => theme.pct50});
    column-gap: ${({ theme }) => theme.size10};
    margin: ${({ theme }) => theme.size30} ${({ theme }) => theme.size0};
  }
`;
export const Bold = styled.p`
  @media (min-width: 1025px) {
    font-weight: ${({ theme }) => theme.bold};
  }
`;
export const ImgRoom = styled.img`
  display: none;
  margin-top: calc(${({ theme }) => theme.size50} +${({ theme }) => theme.size10});
  width: ${({ theme }) => theme.pct100};
  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
export const ImgDescription = styled.img`
  display: none;
  margin-top: calc(${({ theme }) => theme.size50} +${({ theme }) => theme.size10});
  width: ${({ theme }) => theme.pct100};
  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
export const Hr = styled.hr`
  margin: 25px 0;
  border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.white};
  @media (min-width: 1025px) {
    display: none;
  }
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: ${({ theme }) => theme.size8} ${({ theme }) => theme.size0};;
  }
`;
export const Red = styled.p`
  color: ${({ theme }) => theme.red};
`;
export const Section = styled.article`
  p {
    color: ${({ theme }) => theme.darkGray};
  }
`;
export const Subtitle = styled.h3`
  font-size: 1.5em;
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.darkGray};
  @media (min-width: ${({ theme }) => theme.tablet}) and (max-width: ${({ theme }) => theme.desktop1024}) {
    margin-top: ${({ theme }) => theme.size50};
  }
`;
export const GridIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${({ theme }) => theme.size10};
  row-gap: ${({ theme }) => theme.size10};
  @media (min-width: 1025px) {
    margin-right: ${({ theme }) => theme.size50};
  }
  @media (min-width: ${({ theme }) => theme.tablet}) and (max-width: ${({ theme }) => theme.desktop1024}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const GridEach = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 7px);
  grid-template-rows: repeat(12, 7px);
  grid-column-gap: ${({ theme }) => theme.size0};
  grid-row-gap: ${({ theme }) => theme.size0};
  margin: 5px;
  @media (max-width: 460px) {
    margin: 0;
  }
  img:nth-child(1) {
    grid-area: 1 / 1 / 9 / 10;
    width: ${({ theme }) => theme.size50};
  }
  img:nth-child(2) {
    grid-area: 9 / 8 / 11 / 11;
    width: ${({ theme }) => theme.size8};
    cursor: pointer;
  }
  p {
    grid-area: 11 / 1 / 13 / 11;
    margin: 0;
    font-size: 0.9em;
    @media (max-width: 460px) {
      font-size: 0.8em;
    }
  }
`;
export const TagsInterest = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${({ theme }) => theme.size10};
  row-gap: ${({ theme }) => theme.size10};
  padding: 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:${({ theme }) => theme.shadow2};
    border: ${({ theme }) => theme.border} solid #${({ theme }) => theme.lightGray};
    border-radius: ${({ theme }) => theme.radiusBtn};;
    height: ${({ theme }) => theme.size30};
    padding: 5%;
    background-color: ${({ theme }) => theme.absoluteWhite};
    font-weight: ${({ theme }) => theme.bold};
    font-size: 0.7em;
    list-style: none;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) and (max-width: ${({ theme }) => theme.desktop1024}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1025px) {
    margin-top: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size14})
  }
`;
export const ContactButtons = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 64px 5%;
  text-align: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    border-radius:${({ theme }) => theme.radiusBtn};
    width: ${({ theme }) => theme.pct100};
    height: ${({ theme }) => theme.size40};
    background-color: ${({ theme }) => theme.red};
    font-size: 1.1em;
    color: ${({ theme }) => theme.white};;
    outline: none;
    cursor: pointer;
    img {
      margin-right: ${({ theme }) => theme.size4};
    }
  }
  p {
    font-size: 1em;
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.black};
  }
  @media (min-width: ${({ theme }) => theme.tablet}) and (max-width: ${({ theme }) => theme.desktop1024}) {
    margin: auto;
    margin-top: 130px;
    margin-bottom: 130px;
    max-width: 270px;
    button {
      height: ${({ theme }) => theme.size50};
    }
  }
  @media (min-width: 1025px) {
    margin: 64px ${({ theme }) => theme.pct30};
  }
`;
