import React from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import {
  Article,
  Container,
  ContainerImage,
  ImageRoom,
  OverlayHeart,
  OverlayHost,
  HostName,
  ContainerHost,
  ImageHeart,
  ImageHost,
  Description,
  Availability,
  Available,
  Price,
  Title,
  AddressContainer,
  AddressTitle,
  Address,
} from './styles';
import testPhoto from '../images/TestPhotoPreviewCard.png';
import heart from '../images/Heart.svg';
import avatar from '../images/TestAvatarPhoto.png';
const PreviewCard = () => {
  const [show, ref] = useNearScreen();
  return (
    <Article ref={ref}>
      {show && (
        <Container>
          <ContainerImage>
            <OverlayHeart>
              <ImageHeart src={heart} alt="add to favorite" />
            </OverlayHeart>
            <OverlayHost>
              <ContainerHost>
                <HostName>Jane Cooper</HostName>
                <ImageHost src={avatar} alt="Janne Cooper" />
              </ContainerHost>
            </OverlayHost>
            <ImageRoom src={testPhoto} alt="room" />
          </ContainerImage>
          <Description>
            <Availability>
              <Available>Availability: 7/11/19</Available>
              <Price>$948.55</Price>
            </Availability>
            <Title>3 relaxed and fun students in central area</Title>
            <AddressContainer>
              <AddressTitle>Address:</AddressTitle>
              <Address>4517 Washington Ave. Manchester, Kentucky 39495</Address>
            </AddressContainer>
          </Description>
        </Container>
      )}
    </Article>
  );
};
export default PreviewCard;
