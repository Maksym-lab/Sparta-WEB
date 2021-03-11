import styled from 'styled-components';
export const Article = styled.article`
  border-radius: 8px;
  background-color: #f2f2f2;
  width: 100%;
  height: 100px;
  max-width: 294px;
`;
export const ContainerImage = styled.div`
  position: relative;
`;
export const Container = styled.div`
  display: flex;
`;
export const ContainerHost = styled.div`
  display: flex;
`;
export const ImageHeart = styled.img`
  width: 100%;
`;
export const ImageHost = styled.img`
  width: 22px;
`;
export const ImageRoom = styled.img`
  border-radius: 8px;
  height: 100px;
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
  font-weight: 500;
  color: white;
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
`;
export const Price = styled.strong`
  margin: 0;
  font-size: 10px;
`;
export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const AddressTitle = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: bold;
`;
export const Address = styled.p`
  margin: 0;
  font-size: 8px;
`;
