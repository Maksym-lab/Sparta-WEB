import React from 'react';
import { Link } from '@reach/router';
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
import testPhoto from '../../assets/images/TestPhotoPreviewCard.png';
import heart from '../../assets/images/Heart.svg';
import avatar from '../../assets/images/TestAvatarPhoto.png';
const PreviewCard = () => {
  const [show, ref] = useNearScreen();
  return (
    <Link to="/detail" ref={ref}>
      <Article>
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
                <Address>
                  4517 Washington Ave. Manchester, Kentucky 39495
                </Address>
              </AddressContainer>
            </Description>
          </Container>
        )}
      </Article>
    </Link>
  );
};
export default PreviewCard;
