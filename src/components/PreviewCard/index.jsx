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
  } = props;
  const [show, ref] = useNearScreen();
  return (
    <Link to={`/detail/${id}`} ref={ref}>
      {show && (
        <Article>
          <Container>
            <ContainerImage>
              <OverlayHeart>
                <ImageHeart src={heart} alt="add to favorite" />
              </OverlayHeart>
              <OverlayHost>
                <ContainerHost>
                  <HostName>{fullName}</HostName>
                  <ImageHost src={avatar} alt="Janne Cooper" />
                </ContainerHost>
              </OverlayHost>
              <ImageRoom src={mainImage} alt="room" />
            </ContainerImage>
            <Description>
              <Availability>
                <Available>
                  Availability:
                  {' '}
                  {availabilityDate}
                </Available>
                <Price>
                  $
                  {price}
                </Price>
              </Availability>
              <Title>{title}</Title>
              <AddressContainer>
                <AddressTitle>Address:</AddressTitle>
                <Address>{address}</Address>
              </AddressContainer>
            </Description>
          </Container>
        </Article>
      )}
    </Link>
  );
};
export default PreviewCard;
