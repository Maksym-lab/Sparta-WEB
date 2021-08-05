import styled from 'styled-components';
export const MainImage = styled.figure`
  position: relative;
  margin: ${({ theme }) => theme.size0} auto;
  width: ${({ theme }) => theme.pct100};
  img {
    width: ${({ theme }) => theme.pct100};
  }
  @media (min-width: 1024px) and (max-width: 1920px) {
    img {
      border-radius:${({ theme }) => theme.borderRadius8};
      width: ${({ theme }) => theme.pct100};
      height: 354px;
      object-fit: cover;
    }
  }
`;
export const DetailDesktop = styled.div`
  position:relative;
  top:${({ theme }) => theme.size32};
  margin: auto;
  max-width: 841px;
  & .Carousel{
    position:relative;
    top:-60px;
  }
  @media (min-width: 1025px) {
    margin-top: -210px;
    border-radius: ${({ theme }) => theme.borderRadius8};
    background:${({ theme }) => theme.background};
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
  top: ${({ theme }) => theme.size40};
  right: ${({ theme }) => theme.size20};
  p {
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.lightGray};
    border-radius:${({ theme }) => theme.borderRadius4};
    box-shadow:${({ theme }) => theme.shadow2};
    padding:${({ theme }) => theme.size4} ${({ theme }) => theme.size8};
    background: ${({ theme }) => theme.red};
    font-size: ${({ theme }) => theme.fontSize18};
    font-weight: ${({ theme }) => theme.bold};
    text-align: center;
    color: ${({ theme }) => theme.white};
    @media (min-width: ${({ theme }) => theme.tablet}) {
      font-size:${({ theme }) => theme.fontSize26};
    }
  }
`;
export const Container = styled.div`
  position:relative;
  top:-40px;
  margin: auto;
  max-width: 95%;
  @media (min-width: ${({ theme }) => theme.tablet}) {
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.darkGray};
    border-radius: ${({ theme }) => theme.borderRadius8};
    padding: 2% 5%;
  }
`;
export const FirstContactInfo = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    color: ${({ theme }) => theme.darkGray};
    p {
      margin-bottom: ${({ theme }) => theme.size8};
      font-size: ${({ theme }) => theme.fontSize12};
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
    grid-template-columns: ${({ theme }) => theme.pct60} ${({ theme }) => theme.pct15} ${({ theme }) => theme.pct25};
    align-items: center;
    color: ${({ theme }) => theme.darkGray};
    p {
      margin: ${({ theme }) => theme.size8} 0;
      font-size: ${({ theme }) => theme.fontSize12};
    }
    div:nth-child(1) {
      height: ${({ theme }) => theme.pct100};
    }
    time {
      font-size: ${({ theme }) => theme.fontSize12};
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
      margin: ${({ theme }) => theme.size8};
    }
    img { 
      align-items: center;
      height: .7em;
      margin: ${({ theme }) => theme.size8} 0;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: ${({ theme }) => theme.radiusBtn};
    width: ${({ theme }) => theme.BtnWhatsappDetailsMovil};
    height: ${({ theme }) => theme.size16};
    background-color: ${({ theme }) => theme.red};
    font-weight: ${({ theme }) => theme.bold};
    color: ${({ theme }) => theme.white};
    outline: none;
    img {
      margin-right: ${({ theme }) => theme.size6};
      width:${({ theme }) => theme.size10};
    }
  }
`;
export const Host = styled.div`
  display: none;
  margin:${({ theme }) => theme.size24} ${({ theme }) => theme.size0};
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
  margin-top: ${({ theme }) => theme.size30};
  margin-bottom:${({ theme }) => theme.size20};
  img {
    border-radius: ${({ theme }) => theme.radiusCircle};
    width: ${({ theme }) => theme.size26};
    height: ${({ theme }) => theme.size26};
  }
  p {
    margin-left: ${({ theme }) => theme.size4};
    font-size: 1em;
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.black};
  }
`;
export const Title = styled.div`
  display: grid;
  grid-template-columns: 90% ${({ theme }) => theme.pct10};
  margin: ${({ theme }) => theme.size24} ${({ theme }) => theme.size0};
  max-width:100%;
  h1 {
    margin: ${({ theme }) => theme.size0};
    font-size: ${({ theme }) => theme.fontSize16};
    @media(min-width:768px){
      font-size:${({ theme }) => theme.fontSize26};
    }
    @media(min-width:1024px){
      width:${({ theme }) => theme.pct70};
      font-size: ${({ theme }) => theme.fontSize36};
    }
  }
  div{
    display: flex;
    justify-content: flex-end;
    img {
      width: ${({ theme }) => theme.size16};
    }
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
  font-style: normal;
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.size10};
    p {
      color: ${({ theme }) => theme.black};
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
      margin-top: calc(${({ theme }) => theme.size100} + ${({ theme }) => theme.size20});
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
  font-size:${({ theme }) => theme.fontSize14};
  @media (min-width: 1025px) {
    font-weight: ${({ theme }) => theme.bold};
  }
`;
export const ImgRoom = styled.img`
  display: none;
  margin-top: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size10});
  width: ${({ theme }) => theme.pct100};
  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
export const ImgDescription = styled.img`
  display: none;
  margin-top: calc(${({ theme }) => theme.size50} + ${({ theme }) => theme.size10});
  width: ${({ theme }) => theme.pct100};
  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
export const Hr = styled.hr`
  margin: ${({ theme }) => theme.size26} ${({ theme }) => theme.size0};
  color: ${({ theme }) => theme.darkGray};  
  @media (min-width: 1025px) {
    display: none;
  }
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: ${({ theme }) => theme.size30};
  }
`;
export const Red = styled.p`
  color: ${({ theme }) => theme.red};
`;
export const Section = styled.article`
  p {
    margin: ${({ theme }) => theme.size30} ${({ theme }) => theme.size0};
    color: ${({ theme }) => theme.darkGray};
    @media(min-width:768px){
      font-size:${({ theme }) => theme.fontSize16};
      line-height:${({ theme }) => theme.lineSpacing};
    }
  }
`;
export const Subtitle = styled.h3`
  margin-bottom:${({ theme }) => theme.size24};
  font-size: ${({ theme }) => theme.fontSize12};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.darkGray};
  @media (min-width: ${({ theme }) => theme.tablet}){
    margin-top: ${({ theme }) => theme.size50};
    font-size: ${({ theme }) => theme.fontSize18};
  }
`;
export const GridIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${({ theme }) => theme.size10};
  row-gap: ${({ theme }) => theme.size26};
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
  justify-content:center;
  margin: ${({ theme }) => theme.size6};
  @media (max-width: 460px) {
    margin: ${({ theme }) => theme.size0} auto;
  }
  img:nth-child(1) {
    grid-area: 1 / 1 / 9 / 10;
    width: ${({ theme }) => theme.size50};
    margin: ${({ theme }) => theme.size0} auto;
  }
  img:nth-child(2) {
    grid-area: 9 / 8 / 11 / 11;
    width: ${({ theme }) => theme.size8};
    cursor: pointer;
  }
  p {
    grid-area: 11 / 1 / 13 / 11;
    margin: ${({ theme }) => theme.size0} auto;
    font-size: 0.9em;
    text-align:center;
    @media (max-width: 460px) {
      font-size: 0.8em;
    }
  }
`;
export const TagsInterest = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: ${({ theme }) => theme.size10};
  row-gap: ${({ theme }) => theme.size14};
  padding: ${({ theme }) => theme.size0};
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow:${({ theme }) => theme.shadow4};
    border: ${({ theme }) => theme.border} solid #${({ theme }) => theme.lightGray};
    border-radius: ${({ theme }) => theme.radiusBtn};
    height: ${({ theme }) => theme.size30};
    padding: 5%;
    background-color: ${({ theme }) => theme.absoluteWhite};
    font-weight: ${({ theme }) => theme.regular};
    font-size: 0.7em;
    list-style: none;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) and (max-width: ${({ theme }) => theme.desktop1024}) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1025px) {
    margin-top: calc(${({ theme }) => theme.size100} + ${({ theme }) => theme.size60});
    height: fit-content;
  }
`;
export const ContactButtons = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: ${({ theme }) => theme.size64} ${({ theme }) => theme.pct5};
  text-align: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: ${({ theme }) => theme.border} solid ${({ theme }) => theme.lightGray};
    border-radius:${({ theme }) => theme.radiusBtn};
    width: ${({ theme }) => theme.pct100};
    height: ${({ theme }) => theme.size40};
    background-color: ${({ theme }) => theme.red};
    font-size: 1.1em;
    color: ${({ theme }) => theme.white};
    outline: none;
    cursor: pointer;
    font-weight: ${({ theme }) => theme.bold};
    img {
      margin-right: ${({ theme }) => theme.size4};
    }
  }
  p {
    font-size: 1em;
    font-weight: ${({ theme }) => theme.regular};
    color: ${({ theme }) => theme.black};
    margin-top:1.5em;
  }
  @media (min-width: ${({ theme }) => theme.tablet}) and (max-width: ${({ theme }) => theme.desktop1024}) {
    margin: auto;
    margin-top: calc(${({ theme }) => theme.size100} + ${({ theme }) => theme.size30});
    margin-bottom: calc(${({ theme }) => theme.size100} + ${({ theme }) => theme.size30});
    max-width: 270px;
    button {
      height: ${({ theme }) => theme.size50};
    }
  }
  @media (min-width: 1025px) {
    margin: ${({ theme }) => theme.size64} ${({ theme }) => theme.pct30};
  }
`;
