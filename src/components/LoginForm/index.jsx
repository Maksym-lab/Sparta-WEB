import React from 'react';
import { Link, navigate } from '@reach/router';
import { MdVpnKey, MdEmail } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { Hero, Main, Form, InputContainer, Buttons } from './styles';
import backgroundHero from '../../assets/images/BackgroundRegister.png';
import Badge from '../Badge';
import BackButton from '../BackButton';
import useInputValue from '../../hooks/useInputValue';
const LoginForm = ({ disabled, onSubmit, error }) => {
  const [email, setEmail] = useInputValue('email');
  const [password, setPassword] = useInputValue('password');
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };
  const handleCancel = () => {
    navigate('/');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      email: email.value.toLowerCase(),
      password: password.value,
    });
    clearInputs();
  };
  return (
    <>
      <Hero arial-label="Cover titles">
        <img src={backgroundHero} alt="Login" />
        <Badge arial-label="Title" icon={FaUserCircle} message="Login" />
      </Hero>
      <BackButton />
      <Main title="Login">
        <Form role="form" aria-label="Login form" onSubmit={handleSubmit}>
          {error && <p>Please, enter valid credentials</p>}
          <InputContainer role="group">
            <MdEmail aria-label="Email icon" />
            <input
              aria-label="email"
              tabIndex="0"
              autoCorrect="off"
              autoComplete="email"
              type="email"
              {...email}
              disabled={disabled}
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
              {...password}
              disabled={disabled}
              placeholder="Write a password *"
              required
              minLength="6"
              maxLength="40"
            />
          </InputContainer>
          <Buttons>
            <button type="button" onClick={handleCancel}>Cancel</button>
            <button type="submit">Login</button>
          </Buttons>
          <Link to="/register">
            <p>Don&apos;t you have an account yet? Register here</p>
          </Link>
        </Form>
      </Main>
    </>
  );
};
export default LoginForm;
