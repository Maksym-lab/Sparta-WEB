import React from 'react';
import { MdFace, MdVpnKey, MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import {
  Hero,
  Main,
  Form,
  InputContainer,
  Buttons,
  RadioInput,
} from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import Badge from '../../components/Badge';
import BackButton from '../../components/BackButton';
const Register = () => {
  return (
    <>
      <Hero role="group">
        <img src={backgroundHero} alt="Register form" />
        <Badge name="Register" icon={FaUserCircle} message="Register" />
      </Hero>
      <BackButton />
      <Main>
        <Form>
          <InputContainer>
            <MdFace />
            <input
              aria-label="Name"
              tabIndex="0"
              autoComplete="name"
              type="text"
              id="fname"
              name="Name"
              minLength="3"
              maxLength="15"
              required
              placeholder="Write your name"
            />
          </InputContainer>
          <InputContainer>
            <MdFace />
            <input
              aria-label="Last Name"
              tabIndex="0"
              type="text"
              autoComplete="family-name"
              id="flastname"
              name="flastname"
              minLength="3"
              maxLength="15"
              required
              placeholder="Write your last name"
            />
          </InputContainer>
          <InputContainer>
            <MdEmail />
            <input
              aria-label="email"
              tabIndex="0"
              autoCorrect="off"
              autoComplete="email"
              type="email"
              id="email"
              name="email"
              inputMode="email"
              minLength="8"
              maxLength="24"
              required
              placeholder="Write your Email"
            />
          </InputContainer>
          <InputContainer>
            <MdVpnKey />
            <input
              aria-label="Password"
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              minLength="8"
              maxLength="24"
              required
              placeholder="Write a password"
            />
          </InputContainer>
          <RadioInput>
            <input
              aria-label="Host"
              tabIndex="0"
              type="radio"
              name="host"
              id="host"
            />
            <label htmlFor="host">Host</label>
            <input type="radio" tabIndex="0" name="guess" id="guess" />
            <label aria-label="Guess" htmlFor="guess">
              Guess
            </label>
          </RadioInput>
          <Buttons>
            <button name="Cancel" type="button">
              Cancel
            </button>
            <button name="Register" type="submit">
              Register
            </button>
          </Buttons>
        </Form>
      </Main>
    </>
  );
};
export default Register;
