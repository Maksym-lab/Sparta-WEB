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
const PreviewCard = (props) => {
  const {
    id,
    title = '3 relaxed and fun students in central area',
    mainImage = testPhoto,
    host: {
      fullName = 'Jane Cooper',
    },
    address = '4517 Washington Ave. Manchester, Kentucky 39495',
    price = '948.55',
    availabilityDate = '7/11/19',
    imagesBaseUrl,
  } = props;
  const [show, ref] = useNearScreen();
  return (
    <Link role="group" aria-label={`room ${id}`} to={`/detail/${id}`} ref={ref} alt={`Room Offer ${id}`}>
      {show && (
        <Article role="textbox">
          <Container role="group">
            <ContainerImage role="group">
              <OverlayHeart role="none">
                <ImageHeart aria-label="add to favorites" src={heart} alt="add to favorite" />
              </OverlayHeart>
              <OverlayHost role="group">
                <ContainerHost role="none">
                  <HostName aria-label="Host photo">{fullName}</HostName>
                  <ImageHost role="img" aria-label="Host name" src={avatar} alt="Janne Cooper" />
                </ContainerHost>
              </OverlayHost>
              <ImageRoom role="img" aria-label="room preview preview" src={`${imagesBaseUrl}/${mainImage}`} alt="room photo preview" />
            </ContainerImage>
            <Description role="group">
              <Availability role="list">
                <Available role="listitem" arial-label="availability">
                  Availability:
                  {' '}
                  {new Date(availabilityDate).toLocaleDateString('en-US')}
                </Available>
                <Price role="listitem" aria-label="price">
                  $
                  {price}
                </Price>
              </Availability>
              <Title aria-label="title">{title}</Title>
              <AddressContainer role="group">
                <AddressTitle role="none">Address:</AddressTitle>
                <Address aria-label="address">{address}</Address>
              </AddressContainer>
            </Description>
          </Container>
        </Article>
      )}
    </Link>
  );
};
export default PreviewCard;
