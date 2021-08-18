import React from 'react';
import { MdFace, MdVpnKey, MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Hero, Main, SectionUpload, Form, InputContainer, Buttons, RadioInput } from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import whiteCircle from '../../assets/images/whiteCircle.jpeg';
import Badge from '../../components/Badge';
import BackButton from '../../components/BackButton';
const Register = () => {
  return (
    <>
      <Hero>
        <img src={backgroundHero} alt="Register form" />
        <Badge icon={FaUserCircle} message="Register" />
      </Hero>
      <BackButton />
      <Main>
        <SectionUpload>
          <img src={whiteCircle} alt="User" />
          <input type="file" className="inputUpload" />
        </SectionUpload>
        <Form>
          <InputContainer>
            <MdFace />
            <input
              type="text"
              id="fname"
              name="Name"
              placeholder="Write your name"
            />
          </InputContainer>
          <InputContainer>
            <MdFace />
            <input
              type="text"
              id="flastname"
              name="flastname"
              placeholder="Write your last name"
            />
          </InputContainer>
          <InputContainer>
            <MdEmail />
            <input
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              placeholder="Write your Email"
            />
          </InputContainer>
          <InputContainer>
            <MdVpnKey />
            <input
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              placeholder="Write a password"
            />
          </InputContainer>
          <RadioInput>
            <input type="radio" name="host" id="host" />
            <label htmlFor="host">Host</label>
            <input type="radio" name="guess" id="guess" />
            <label htmlFor="guess">Guess</label>
          </RadioInput>
          <Buttons>
            <button type="button">Cancel</button>
            <button type="submit">Register</button>
          </Buttons>
        </Form>
      </Main>
    </>
  );
};
export default Register;
