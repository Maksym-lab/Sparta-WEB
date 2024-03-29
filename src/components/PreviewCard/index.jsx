import React, { useContext } from 'react';
import { Link } from '@reach/router';
import LazyLoad from 'react-lazyload';
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
import PhotoDefault from '../../assets/images/PhotoPreviewCard.png';
import ToggleLikeMutation from '../../containers/ToggleLikeMutation';
import FavButton from '../FavButton';
import { Context } from '../../Context';
const PreviewCard = (props) => {
  const { isAuth, userId } = useContext(Context);
  const {
    id,
    title = '3 relaxed and fun students in central area',
    mainImage = PhotoDefault,
    host = [],
    address = '4517 Washington Ave. Manchester, Kentucky 39495',
    price = '948.55',
    availabilityDate = '7/11/19',
    imagesBaseUrl,
    showFav = true,
  } = props;
  const [show, ref] = useNearScreen();
  return (
    <Link
      role="group"
      aria-label={`room ${id}`}
      to={`/detail/${id}`}
      ref={ref}
      alt={`Room Offer ${id}`}
    >
      {show && (
        <LazyLoad height={250}>
          <Article role="textbox">
            <Container role="group">
              <ContainerImage role="group">
                {isAuth && showFav && (
                  <OverlayHeart role="none">
                    <ToggleLikeMutation>
                      {(toggleLike) => {
                        const handleFavorite = () => {
                          toggleLike({
                            variables: {
                              roomId: id,
                              userId,
                            },
                          });
                          alert('Room added to favorites');
                        };
                        return <FavButton onClick={handleFavorite} />;
                      }}
                    </ToggleLikeMutation>
                  </OverlayHeart>
                )}
                <OverlayHost role="group">
                  <ContainerHost role="none">
                    <HostName aria-label="Host photo">{host.fullName}</HostName>
                    <ImageHost
                      role="img"
                      aria-label="Host name"
                      src={`${imagesBaseUrl}/${host.profile.picture}`}
                      alt={`${host.fullName}`}
                    />
                  </ContainerHost>
                </OverlayHost>
                <ImageRoom
                  role="img"
                  aria-label="room preview preview"
                  src={`${imagesBaseUrl}/${mainImage}`}
                  alt="room preview"
                />
              </ContainerImage>
              <Description role="group">
                <Availability role="list">
                  <Available role="listitem" arial-label="availability">
                    Availability:{' '}
                    {new Date(availabilityDate).toLocaleDateString('en-US')}
                  </Available>
                  <Price role="listitem" aria-label="price">
                    ${price}
                  </Price>
                </Availability>
                <Title aria-label="title">
                  {title.length > 49 ? `${title.substring(0, 50)}...` : title}
                </Title>
                <AddressContainer role="group">
                  <AddressTitle role="none">Address:</AddressTitle>
                  <Address aria-label="address">
                    {address.length > 55
                      ? `${address.substring(0, 56)}...`
                      : address}
                  </Address>
                </AddressContainer>
              </Description>
            </Container>
          </Article>
        </LazyLoad>
      )}
    </Link>
  );
};
export default PreviewCard;
