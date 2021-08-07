import React from 'react';
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
import Carousel from '../../components/Carousel';
const Detail = () => {
  return (
    <>
      <BackgroundDetailDesktop>
        <Hero src={backgroundDetailDesktopImage} alt="Background" />
      </BackgroundDetailDesktop>
      <BackButton />
      <DetailDesktop>
        <MainImage>
          <OverlayPrice>
            <p>$948.55</p>
          </OverlayPrice>
          <img src={testMainImageDetail} alt="room" />
        </MainImage>
        <Carousel />
        <Container>
          <FirstContactInfo>
            <div>
              <p>Created: 10/28/12</p>
              <p>Availability: 7/11/19</p>
            </div>
            <Social>
              <div>
                <button type="submit">
                  <img src={whatsappIconWhite} alt="WhatsApp" />
                  WhatsApp
                </button>
              </div>
              <div>
                <p>tranthuy.nute@gmail.com</p>
                <img src={emailIcon} alt="WhatsApp" />
              </div>
            </Social>
          </FirstContactInfo>
          <FirstContactInfoTabAndDesktop>
            <HostTab>
              <img src={hostImage} alt="Diana Cooper Host" />
              <p>Diana Cooper</p>
            </HostTab>
            <div>
              <time>Created: 10/28/12</time>
              <p>Availability: 7/11/19</p>
            </div>
            <Social>
              <div>
                <button type="submit">
                  <img src={whatsappIconWhite} alt="WhatsApp" />
                  Contact the host
                </button>
              </div>
              <div>
                <p>tranthuy.nute@gmail.com</p>
                <img src={emailIcon} alt="WhatsApp" />
              </div>
            </Social>
          </FirstContactInfoTabAndDesktop>
          <Host>
            <img src={hostImage} alt="Diana Cooper Host" />
            <p>Diana Cooper</p>
          </Host>
          <Title>
            <h1>3 relaxed and fun students in central area</h1>
            <div>
              <img src={heart} alt="add to favorite" />
            </div>
          </Title>
          <Hr />
          <AddressAndReferencesDesktop>
            <Address>
              <Subtitle>Address:</Subtitle>
              <Red>3891 Ranchview Dr. Richardson, California 62639</Red>
            </Address>
            <Section>
              <Subtitle>References:</Subtitle>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </Section>
          </AddressAndReferencesDesktop>
          <Hr />
          <DescriptionAndImageDesktop>
            <div>
              <Section>
                <Subtitle>Description:</Subtitle>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </Section>
              <GridIcons>
                <Tooltip text="Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue">
                  <GridEach>
                    <img src={closetIcon} alt="icon" />
                    <img src={infoIcon} alt="more info about XXX" />
                    <p>4 rooms</p>
                  </GridEach>
                </Tooltip>
                <Tooltip text="Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue">
                  <GridEach>
                    <img src={closetIcon} alt="icon" />
                    <img src={infoIcon} alt="more info about XXX" />
                    <p>4 rooms</p>
                  </GridEach>
                </Tooltip>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
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
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
                <GridEach>
                  <img src={closetIcon} alt="icon" />
                  <img src={infoIcon} alt="more info about XXX" />
                  <p>4 rooms</p>
                </GridEach>
              </GridIcons>
            </div>
          </TheRoomAndImageDesktop>
          <Hr />
          <AtmosphereDesktop>
            <Section>
              <Subtitle>Atmosphere</Subtitle>
              <Bold>What are we looking for?</Bold>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </Section>
            <TagsInterest>
              <li>Pet friendly</li>
              <li>Pet friendly</li>
              <li>Pet friendly</li>
              <li>Pet friendly</li>
              <li>Pet friendly</li>
              <li>Pet friendly</li>
              <li>Pet friendly</li>
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
  );
};
export default Detail;
