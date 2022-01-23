import React, { useState, useContext } from 'react';
import { Link } from '@reach/router';
import Carousel from '../../components/Carousel';
import LoadingComponent from '../../components/Loading';
import ErrorComponent from '../../components/Error';
import {
  FirstContactInfo,
  MainImage,
  Container,
  Social,
  Host,
  Title,
  Hr,
  Address,
  Red,
  Subtitle,
  Section,
  GridIcons,
  GridEach,
  TagsInterest,
  TagsReferences,
  ContactButtons,
  HostTab,
  FirstContactInfoTabAndDesktop,
  OverlayPrice,
  DetailDesktop,
  ImgRoom,
  Bold,
  Hero,
  ImgDescription,
  AddressAndReferencesDesktop,
  DescriptionAndImageDesktop,
  TheRoomAndImageDesktop,
  AtmosphereDesktop,
  BackgroundDetailDesktop,
} from './styles';
import emailIcon from '../../assets/images/EmailIcon.svg';
import infoIcon from '../../assets/images/Tooltip.svg';
import whatsappIconWhite from '../../assets/images/WhatsAppIconWhite.svg';
import heart from '../../assets/images/Heart.svg';
import twoGirls from '../../assets/images/TwoGirls.png';
import peopleImage from '../../assets/images/PeopleImage.png';
import backgroundDetailDesktopImage from '../../assets/images/BackgroundDetailDesktop.jpg';
import BackButton from '../../components/BackButton';
import Tooltip from '../../components/Tooltip';
import { Context } from '../../Context';
const Detail = (props) => {
  const { isAuth } = useContext(Context);
  const {
    imagesBaseUrl,
    data: { loading, error, room },
  } = props || {};
  const [imageFromCarousel, setImageFromCarousel] = useState(
    room && room.mainImage,
  );
  if (error) {
    return <ErrorComponent />;
  }
  if (loading) {
    return <LoadingComponent />;
  }
  const {
    mainImage,
    images,
    title,
    description,
    host = [],
    price,
    address,
    features = [],
    places = [],
    availabilityDate,
  } = room || {};
  return (
    <>
      {room && (
        <>
          <BackgroundDetailDesktop>
            <Hero src={backgroundDetailDesktopImage} alt="Background" />
          </BackgroundDetailDesktop>
          <BackButton />
          <DetailDesktop>
            <MainImage>
              <OverlayPrice>
                <p>${price}</p>
              </OverlayPrice>
              <img
                src={`${imagesBaseUrl}/${imageFromCarousel || mainImage}`}
                alt={title}
              />
            </MainImage>
            <div className="Carousel">
              <Carousel
                imagesToRenderInCarousel={images}
                baseImage={imagesBaseUrl}
                setImageFromCarousel={setImageFromCarousel}
              />
            </div>
            <Container>
              <FirstContactInfo>
                <div>
                  <p>
                    Availability:{' '}
                    {new Date(availabilityDate).toLocaleDateString('en-US')}
                  </p>
                </div>
                <Social>
                  {isAuth && (
                    <div>
                      <a
                        href={`https:
                      >
                        <button type="submit">
                          <img src={whatsappIconWhite} alt="WhatsApp" />
                          WhatsApp
                        </button>
                      </a>
                    </div>
                  )}
                  {!isAuth && (
                    <div>
                      <Link to="/login">
                        <button type="submit">
                          <img src={whatsappIconWhite} alt="WhatsApp" />
                          WhatsApp
                        </button>
                      </Link>
                    </div>
                  )}
                  <div>
                    <p>{host.email}</p>
                    <img src={emailIcon} alt="WhatsApp" />
                  </div>
                </Social>
              </FirstContactInfo>
              <FirstContactInfoTabAndDesktop>
                <HostTab>
                  <img
                    src={`${imagesBaseUrl}/${host.profile.picture}`}
                    alt={`${host.fullName} Host`}
                  />
                  <p>{host.fullName}</p>
                </HostTab>
                <div>
                  <p>
                    Availability:{' '}
                    {new Date(availabilityDate).toLocaleDateString('en-US')}
                  </p>
                </div>
                <Social>
                  {isAuth && (
                    <div>
                      <a
                        href={`https:
                      >
                        <button type="submit">
                          <img src={whatsappIconWhite} alt="WhatsApp" />
                          WhatsApp
                        </button>
                      </a>
                    </div>
                  )}
                  {!isAuth && (
                    <div>
                      <Link to="/login">
                        <button type="submit">
                          <img src={whatsappIconWhite} alt="WhatsApp" />
                          WhatsApp
                        </button>
                      </Link>
                    </div>
                  )}
                  <div>
                    <p>{host.email}</p>
                    <img src={emailIcon} alt="WhatsApp" />
                  </div>
                </Social>
              </FirstContactInfoTabAndDesktop>
              <Host>
                <img
                  src={`${imagesBaseUrl}/${host.profile.picture}`}
                  alt={`${host.fullName} Host`}
                />
                <p>{host.fullName}</p>
              </Host>
              <Title>
                <h1>{title}</h1>
                <div>
                  <img src={heart} alt="add to favorite" />
                </div>
              </Title>
              <Hr />
              <AddressAndReferencesDesktop>
                <Address>
                  <Subtitle>Address:</Subtitle>
                  <Red>{address}</Red>
                </Address>
                <Section>
                  <Subtitle>References:</Subtitle>
                  <TagsReferences>
                    {places.length > 0
                      ? places.map((item) => (
                          <li key={item.id}>{item.details}</li>
                        ))
                      : 'No features Found'}
                  </TagsReferences>
                </Section>
              </AddressAndReferencesDesktop>
              <Hr />
              <DescriptionAndImageDesktop>
                <div>
                  <Section>
                    <Subtitle>Description:</Subtitle>
                    <p>{description}</p>
                  </Section>
                  <GridIcons>
                    {features.map(({ feature }) => {
                      if (feature.category.id === '1') {
                        return (
                          <Tooltip text={feature.name} key={feature.id}>
                            <GridEach>
                              <img
                                src={`${imagesBaseUrl}/${feature.icon}`}
                                alt={`${feature.name}`}
                              />
                              <img
                                src={infoIcon}
                                alt={`More information about ${feature.name}`}
                              />
                              <p>{feature.name}</p>
                            </GridEach>
                          </Tooltip>
                        );
                      }
                    })}
                  </GridIcons>
                </div>
                <div>
                  <ImgDescription src={twoGirls} alt="Preview description" />
                </div>
              </DescriptionAndImageDesktop>
              <Hr />
              <TheRoomAndImageDesktop>
                <div>
                  <ImgRoom src={peopleImage} alt="The room preview" />
                </div>
                <div>
                  <Section>
                    <Subtitle>The room:</Subtitle>
                  </Section>
                  <GridIcons>
                    {features.map(({ feature }) => {
                      if (feature.category.id === '2') {
                        return (
                          <Tooltip text={feature.name} key={feature.id}>
                            <GridEach>
                              <img
                                src={`${imagesBaseUrl}/${feature.icon}`}
                                alt={`${feature.name}`}
                              />
                              <img
                                src={infoIcon}
                                alt={`More information about ${feature.name}`}
                              />
                              <p>{feature.name}</p>
                            </GridEach>
                          </Tooltip>
                        );
                      }
                    })}
                  </GridIcons>
                </div>
              </TheRoomAndImageDesktop>
              <Hr />
              <AtmosphereDesktop>
                <Section>
                  <Subtitle>Atmosphere</Subtitle>
                  <Bold>What are we looking for?</Bold>
                  <p>
                    Whether you look forward to a city break, a romantic
                    getaway, a family or beach holiday, a cultural or
                    gastronomic trip, alone or with friends, you will be spoilt
                    for choice.
                  </p>
                </Section>
                <TagsInterest>
                  {places.length > 0
                    ? places.map((item) => (
                        <li key={item.id}>{item.details}</li>
                      ))
                    : 'No features Found'}
                </TagsInterest>
              </AtmosphereDesktop>
              <ContactButtons>
                <a
                  href={`https:
                >
                  <button type="button">
                    <img src={whatsappIconWhite} alt="WhatsApp" />
                    Contact the host
                  </button>
                </a>
                <Link to="/register">
                  <p>Are you not registered?</p>
                </Link>
              </ContactButtons>
            </Container>
          </DetailDesktop>
        </>
      )}
    </>
  );
};
export default Detail;
