import React from 'react';
import { Container, Description } from './styles';
import errorCat from '../../assets/images/errorCat.svg';
const Error = () => {
  return (
    <Container>
      <img src={errorCat} alt="Sorry there was an error" />
      <Description>
        <h3>Sorry!</h3>
        <h2>Unexpected error</h2>
        <p>Something went wrong, reload again</p>
      </Description>
    </Container>
  );
};
export default Error;
