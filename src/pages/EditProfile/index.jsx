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
import BackButton from '../../components/BackButton';
const EditProfile = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Main>
      <Hero>
        <img src={BannerTitle} alt="" />
        <Badge icon={MdWork} message="EditProfile" />
      </Hero>
      <BackButton />
      <Section>
        <Form onSubmit={handleSubmit}>
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
              placeholder="Write your name *"
              required
              maxLength="40"
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
              placeholder="Write your last name *"
              required
              maxLength="50"
            />
          </InputContainer>
          <label htmlFor="email">
            Email:
            <MdInfoOutline />
          </label>
          <InputContainer>
            <MdEmail />
            <input
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              placeholder="Write your Email *"
              required
              minLength="7"
              maxLength="50"
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
                  type="number"
                  id="tel"
                  name="phone"
                  placeholder="Write your cellphone *"
                  required
                  pattern="[0-9]{10}"
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
                  placeholder="Date of Birth *"
                  required
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
              id="password"
              name="password"
              autoComplete="current-password"
              placeholder="Write your password *"
              required
              minLength="6"
              maxLength="40"
            />
            <a href="/">Change your password</a>
          </InputContainer>
          <label htmlFor="about me">
            About me:
            <MdInfoOutline />
          </label>
          <textarea
            rows="7"
            id="description"
            placeholder="Write something so that your guest knows you *"
            required
            minLength="20"
            maxLength="255"
          />
          <label htmlFor="description">
            What I look for in my roomies?
            <MdInfoOutline />
          </label>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search tags *"
            required
            minLength="10"
            maxLength="120"
          />
          <Button type="submit">Save</Button>
        </Form>
      </Section>
    </Main>
  );
};
export default EditProfile;
