import React from 'react';
import {
  MdWork,
  MdInfoOutline,
  MdFace,
  MdEmail,
  MdVpnKey,
  MdLocalPhone,
  MdCake,
} from 'react-icons/md';
import {
  Main,
  Hero,
  Section,
  Form,
  InputContainer,
  HalfSection,
  Button,
  Phone,
  Birth,
} from './styles';
import Badge from '../../components/Badge';
import BannerTitle from '../../assets/images/editPerfil.jpg';
const EditProfile = () => {
  return (
    <Main>
      <Hero>
        <img src={BannerTitle} alt="" />
        <Badge icon={MdWork} message="EditProfile" />
      </Hero>
      <Section>
        <Form>
          <label htmlFor="Name">
            Name:
            <MdInfoOutline />
          </label>
          <InputContainer>
            <MdFace className="iconInput" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Write your name"
            />
          </InputContainer>
          <label htmlFor="LastName">
            Last Name:
            <MdInfoOutline />
          </label>
          <InputContainer>
            <MdFace />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Write your last name"
            />
          </InputContainer>
          <label htmlFor="email">
            Email:
            <MdInfoOutline />
          </label>
          <InputContainer>
            <MdEmail />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Write your email"
            />
          </InputContainer>
          <HalfSection>
            <Phone>
              <label htmlFor="Phone">
                Phone:
                <MdInfoOutline />
              </label>
              <InputContainer>
                <MdLocalPhone />
                <input
                  type="tel"
                  id="tel"
                  name="phone"
                  placeholder="Write your phone"
                />
              </InputContainer>
            </Phone>
            <Birth>
              <label htmlFor="DateBirth">
                Date of Birth:
                <MdInfoOutline />
              </label>
              <InputContainer>
                <MdCake />
                <input
                  type="date"
                  id="date"
                  name="Date of Birth"
                  placeholder="Write your phone"
                />
              </InputContainer>
            </Birth>
          </HalfSection>
          <label htmlFor="Password">
            Password:
            <MdInfoOutline />
          </label>
          <InputContainer className="password">
            <MdVpnKey />
            <input
              type="password"
              id="pwd"
              name="pwd"
              placeholder="Write your password"
            />
            <a href="#">Change your password</a>
          </InputContainer>
          <label htmlFor="about me">
            About me:
            <MdInfoOutline />
          </label>
          <textarea
            rows="7"
            id="description"
            placeholder="Write something so that your guest knows you"
          />
          <label htmlFor="description">
            What I look for in my roomies?
            <MdInfoOutline />
          </label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search tags"
          />
          <Button>Save</Button>
        </Form>
      </Section>
    </Main>
  );
};
export default EditProfile;
