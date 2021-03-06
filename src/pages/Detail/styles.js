import styled from 'styled-components';
export const MainImage = styled.figure`
  position: relative;
  width: 100%;
  margin: 0 auto;
  img {
    width: 100%;
  }
  @media (min-width: 1025px) and (max-width: 1920px) {
    img {
      width: 100%;
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
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const Hero = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;
export const OverlayPrice = styled.div`
  position: absolute;
  top: 35px;
  right: 20px;
  p {
    background-color: rgba(0, 0, 0, 0.4);
    font-size: 2em;
    font-weight: bold;
    color: #f6f6f6;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
  }
`;
export const Container = styled.div`
  margin: auto;
  max-width: 90%;
  @media (min-width: 768px) {
    border: 0.5px solid #a7a7a7;
    border-radius: 8px;
    padding: 3%;
  }
`;
export const FirstContactInfo = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 1fr);
    color: #404040;
    p {
      font-size: 1em;
    }
    div:nth-child(1) {
      height: 100%;
    }
  }
`;
export const FirstContactInfoTabAndDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    grid-template-columns: 50% 22% 30%;
    color: #404040;
    p {
      font-size: 1.1em;
      margin: 0;
    }
    div:nth-child(1) {
      height: 100%;
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
      margin-right: 8px;
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid #404040;
    border-radius: 3.5px;
    width: 100%;
    height: 20px;
    background-color: #eb5757;
    font-weight: bold;
    color: white;
    outline: none;
    img {
      margin-right: 5px;
    }
  }
`;
export const Host = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    img {
      border-radius: 50%;
      width: 27px;
      height: 27px;
    }
    p {
      margin-left: 5px;
      font-size: 1em;
      font-weight: bold;
      color: #000000;
    }
  }
`;
export const HostTab = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    width: 27px;
    height: 27px;
  }
  p {
    margin-left: 5px;
    font-size: 1em;
    font-weight: bold;
    color: #000000;
  }
`;
export const Title = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
  column-gap: 10px;
  margin: 15px 0;
  h1 {
    margin: 0;
    font-size: 2em;
  }
  img {
    width: 17px;
  }
  @media (min-width: 1025px) {
    margin: 30px 0;
    div:nth-child(2) {
      margin-right: 13px;
      text-align: right;
    }
  }
`;
export const AddressAndReferencesDesktop = styled.address`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
    p {
      color: #262526;
    }
  }
`;
export const DescriptionAndImageDesktop = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap: 10px;
    margin: 30px 0px;
    img {
      width: 100%;
    }
    h3 {
      margin-top: 120px;
    }
  }
`;
export const TheRoomAndImageDesktop = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap: 10px;
    margin: 30px 0px;
  }
`;
export const AtmosphereDesktop = styled.div`
  @media (min-width: 1025px) {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    column-gap: 10px;
    margin: 30px 0px;
  }
`;
export const Bold = styled.p`
  @media (min-width: 1025px) {
    font-weight: bold;
  }
`;
export const ImgRoom = styled.img`
  display: none;
  margin-top: 60px;
  width: 100%;
  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
export const ImgDescription = styled.img`
  display: none;
  margin-top: 60px;
  width: 100%;
  @media (min-width: 1025px) {
    display: inline-block;
  }
`;
export const Hr = styled.hr`
  margin: 25px 0;
  border: 0.25px solid #a7a7a7;
  @media (min-width: 1025px) {
    display: none;
  }
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 7px 0;
  }
`;
export const Red = styled.p`
  color: #eb5757;
`;
export const Section = styled.article`
  p {
    color: #404040;
  }
`;
export const Subtitle = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  color: #404040;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 50px;
  }
`;
export const GridIcons = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 10px;
  @media (min-width: 1025px) {
    margin-right: 50px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const GridEach = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 7px);
  grid-template-rows: repeat(12, 7px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin: 5px;
  @media (max-width: 460px) {
    margin: 0;
  }
  img:nth-child(1) {
    grid-area: 1 / 1 / 9 / 10;
    width: 55px;
  }
  img:nth-child(2) {
    grid-area: 9 / 8 / 11 / 11;
    width: 8px;
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
  column-gap: 10px;
  row-gap: 10px;
  padding: 0;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border: 0.5px solid #8c8979;
    border-radius: 3px;
    height: 30px;
    padding: 5%;
    background-color: #f6f6f6;
    font-weight: bold;
    font-size: 0.7em;
    list-style: none;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (min-width: 1025px) {
    margin-top: 60px;
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
    border: 0.2px solid #404040;
    border-radius: 3.5px;
    width: 100%;
    height: 40px;
    background-color: #eb5757;
    font-size: 1.1em;
    color: white;
    outline: none;
    cursor: pointer;
    img {
      margin-right: 5px;
    }
  }
  p {
    font-size: 1em;
    font-weight: bold;
    color: #404040;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: auto;
    margin-top: 130px;
    margin-bottom: 130px;
    max-width: 270px;
    button {
      height: 50px;
    }
  }
  @media (min-width: 1025px) {
    margin: 64px 30%;
  }
`;
