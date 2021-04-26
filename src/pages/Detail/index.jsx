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
  CarouselContainer,
} from './styles';
import testMainImageDetail from '../../assets/images/TestMainImageDetail.png';
import whatsAppIcon from '../../assets/images/WhatsAppIcon.svg';
import emailIcon from '../../assets/images/EmailIcon.svg';
import hostImage from '../../assets/images/User.png';
import closetIcon from '../../assets/images/ClosetIcon.svg';
import infoIcon from '../../assets/images/Tooltip.svg';
import whatsappIconWhite from '../../assets/images/WhatsAppIconWhite.svg';
import Carousel from '../../components/Carousel';
const Detail = () => {
  return (
    <>
      <MainImage>
        <img src={testMainImageDetail} alt="room" />
      </MainImage>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <Container>
        <FirstContactInfo>
          <div>
            <p>Created: 10/28/12</p>
            <p>Availability: 7/11/19</p>
          </div>
          <Social>
            <div>
              <p>Contact by WhatsApp</p>
              <img src={whatsAppIcon} alt="WhatsApp" />
            </div>
            <div>
              <p>tranthuy.nute@gmail.com</p>
              <img src={emailIcon} alt="WhatsApp" />
            </div>
          </Social>
        </FirstContactInfo>
        <Host>
          <img src={hostImage} alt="Diana Cooper Host" />
          <p>Diana Cooper</p>
        </Host>
        <Title>
          <h1>3 relaxed and fun students in central area</h1>
        </Title>
        <Hr />
        <Address>
          <Subtitle>Address:</Subtitle>
          <Red>3891 Ranchview Dr. Richardson, California 62639</Red>
        </Address>
        <Section>
          <Subtitle>References:</Subtitle>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </Section>
        <Hr />
        <Section>
          <Subtitle>Description:</Subtitle>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </Section>
        <GridIcons>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
        </GridIcons>
        <Hr />
        <Section>
          <Subtitle>The room:</Subtitle>
        </Section>
        <GridIcons>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
          <div>
            <GridEach>
              <img src={closetIcon} alt="icon" />
              <img src={infoIcon} alt="more info about XXX" />
            </GridEach>
            <p>4 rooms</p>
          </div>
        </GridIcons>
        <Hr />
        <Section>
          <Subtitle>Atmosphere</Subtitle>
          <p>What are we looking for?</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </Section>
        <TagsInterest>
          <div>Pet friendly</div>
          <div>Pet friendly</div>
          <div>Pet friendly</div>
          <div>Pet friendly</div>
          <div>Pet friendly</div>
          <div>Pet friendly</div>
          <div>Pet friendly</div>
        </TagsInterest>
        <ContactButtons>
          <button type="button">
            <img src={whatsappIconWhite} alt="WhatsApp" />
            Contact the host
          </button>
          <p>Are you not registered?</p>
        </ContactButtons>
      </Container>
    </>
  );
};
export default Detail;
