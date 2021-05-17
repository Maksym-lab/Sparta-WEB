import styled from 'styled-components';
export const Article = styled.article`
  border: 1px solid lightgray;
  border-radius: 13px;
  width: 100%;
  height: 100px;
  background-color: #f2f2f2;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    height: 113px;
  }
  @media screen and (min-width: 1024px) {
    height: 147px;
  }
`;
export const ContainerImage = styled.div`
  position: relative;
  height: inherit;
`;
export const Container = styled.div`
  display: flex;
  height: inherit;
`;
export const ContainerHost = styled.div`
  display: flex;
  margin-bottom: 5px;
`;
export const ImageHeart = styled.img`
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 15px;
  }
`;
export const ImageHost = styled.img`
  width: 22px;
  @media screen and (min-width: 1024px) {
    width: 27px;
  }
`;
export const ImageRoom = styled.img`
  -webkit-box-shadow: 13px 0px 6px -9px rgba(217, 217, 217, 1);
  -moz-box-shadow: 13px 0px 6px -9px rgba(217, 217, 217, 1);
  box-shadow: 13px 0px 6px -9px rgba(217, 217, 217, 1);
  border-radius: 8px;
  height: 100%;
`;
export const OverlayHeart = styled.div`
  position: absolute;
  right: 7px;
  top: 7px;
`;
export const OverlayHost = styled.div`
  position: absolute;
  bottom: 7px;
  right: 7px;
`;
export const HostName = styled.p`
  align-self: flex-end;
  margin: 0;
  font-size: 8px;
  font-weight: 400;
  color: white;
  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 6px;
`;
export const Title = styled.h2`
  font-size: 10px;
  margin: 6px 0;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;
export const Availability = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 15px;
  color: #404040;
`;
export const Available = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;
export const Price = styled.strong`
  margin: 0;
  font-size: 10px;
  text-shadow: 3px 1px 2px rgba(0,0,0,0.25);
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 15px;
  }
`;
export const AddressTitle = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: bold;
  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;
export const Address = styled.p`
  margin: 0;
  font-size: 8px;
  @media screen and (min-width: 1024px) {
    font-size: 13px;
  }
`;
