import React from 'react';
import Carousel from '../../components/Carousel';
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
  Hero,
  ImgDescription,
  AddressAndReferencesDesktop,
  DescriptionAndImageDesktop,
  TheRoomAndImageDesktop,
  AtmosphereDesktop,
  BackgroundDetailDesktop,
} from './styles';
import testMainImageDetail from '../../assets/images/RoomImage.jpg';
import emailIcon from '../../assets/images/EmailIcon.svg';
import hostImage from '../../assets/images/User.png';
import closetIcon from '../../assets/images/ClosetIcon.svg';
import infoIcon from '../../assets/images/Tooltip.svg';
import whatsappIconWhite from '../../assets/images/WhatsAppIconWhite.svg';
import heart from '../../assets/images/Heart.svg';
import twoGirls from '../../assets/images/TwoGirls.png';
import peopleImage from '../../assets/images/PeopleImage.png';
import backgroundDetailDesktopImage from '../../assets/images/BackgroundDetailDesktop.png';
import BackButton from '../../components/BackButton';
import Tooltip from '../../components/Tooltip';
const Detail = (props) => {
  console.log('props: ', props);
  const {
    data: {
      loading,
      error,
      room,
    },
  } = (props) || {};
  console.log('data: ', room);
  if (error) {
    return <p>Sorry, we couldn&apos;t find the room</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  const { title,
    description,
    host: { fullName, email } = {},
    price,
    address,
    features = [],
    places = [],
    availabilityDate } = room || {};
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
              <img src={testMainImageDetail} alt="room" />
            </MainImage>
            <div className="Carousel">
              <Carousel />
            </div>
            <Container>
              <FirstContactInfo>
                <div>
                  <p>Availability: {availabilityDate.slice(0, -15)}</p>
                </div>
                <Social>
                  <div>
                    <button type="submit">
                      <img src={whatsappIconWhite} alt="WhatsApp" />
                      WhatsApp
                    </button>
                  </div>
                  <div>
                    <p>{email}</p>
                    <img src={emailIcon} alt="WhatsApp" />
                  </div>
                </Social>
              </FirstContactInfo>
              <FirstContactInfoTabAndDesktop>
                <HostTab>
                  <img src={hostImage} alt="Diana Cooper Host" />
                  <p>{fullName}</p>
                </HostTab>
                <div>
                  <p>Availability: {availabilityDate}</p>
                </div>
                <Social>
                  <div>
                    <button type="submit">
                      <img src={whatsappIconWhite} alt="WhatsApp" />
                      Contact the host
                    </button>
                  </div>
                  <div>
                    <p>{email}</p>
                    <img src={emailIcon} alt="WhatsApp" />
                  </div>
                </Social>
              </FirstContactInfoTabAndDesktop>
              <Host>
                <img src={hostImage} alt="Diana Cooper Host" />
                <p>{fullName}</p>
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
                    {
                      places.map((item) => <li key={item.id}>{item.details}</li>)
                    }
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
                    {
                      features.map(({ feature }) => {
                        if (feature.category.id === '1') {
                          return (
                            <Tooltip text={feature.name} key={feature.id}>
                              <GridEach>
                                <img src={closetIcon} alt="icon" />
                                <img src={infoIcon} alt={`More information about ${feature.name}`} />
                                <p>{feature.name}</p>
                              </GridEach>
                            </Tooltip>
                          );
                        }
                      })
                    }
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
                    {
                      features.map(({ feature }) => {
                        if (feature.category.id === '2') {
                          return (
                            <Tooltip text={feature.name} key={feature.id}>
                              <GridEach>
                                <img src={closetIcon} alt="icon" />
                                <img src={infoIcon} alt={`More information about ${feature.name}`} />
                                <p>{feature.name}</p>
                              </GridEach>
                            </Tooltip>
                          );
                        }
                      })
                    }
                  </GridIcons>
                </div>
              </TheRoomAndImageDesktop>
              <Hr />
              <AtmosphereDesktop>
                <Section>
                  <Subtitle>Atmosphere</Subtitle>
                  {}
                </Section>
                <TagsInterest>
                  {
                    places.map((item) => <li key={item.id}>{item.details}</li>)
                  }
                </TagsInterest>
              </AtmosphereDesktop>
              <ContactButtons>
                <button type="button">
                  <img src={whatsappIconWhite} alt="WhatsApp" />
                  Contact the host
                </button>
                <p>Are you not registered?</p>
              </ContactButtons>
            </Container>
          </DetailDesktop>
        </>
      )}
    </>
  );
};
export default Detail;
