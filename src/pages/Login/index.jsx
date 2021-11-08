import React from 'react';
import { MdVpnKey, MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Hero, Main, Form, InputContainer, Buttons } from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import Badge from '../../components/Badge';
import BackButton from '../../components/BackButton';
const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Hero arial-label="Cover titles">
        <img src={backgroundHero} alt="Login" />
        <Badge arial-label="Title" icon={FaUserCircle} message="Login" />
      </Hero>
      <BackButton />
      <Main title="Login">
        <Form role="form" aria-label="Login form">
          <InputContainer role="group">
            <MdEmail aria-label="Email icon" />
            <input
              aria-label="email"
              tabIndex="0"
              autoCorrect="off"
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
          <InputContainer role="group">
            <MdVpnKey aria-label="Password icon" />
            <input
              aria-label="password"
              tabIndex="0"
              autoComplete="current-password"
              type="password"
              id="password"
              name="password"
              placeholder="Write a password *"
              required
              minLength="6"
              maxLength="40"
            />
          </InputContainer>
          <Buttons>
            <button type="button">Cancel</button>
            <button type="submit">Login</button>
          </Buttons>
        </Form>
      </Main>
    </>
  );
};
export default Login;
