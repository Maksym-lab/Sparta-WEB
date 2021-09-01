import React from 'react';
import { Container, Description } from '../Error/styles';
import errorCat from '../../assets/images/dataNotFound.svg';
const DataNotFound = () => {
  return (
    <Container>
      <img src={errorCat} alt="Sorry there was an error" />
      <Description>
        <h3>Sorry!</h3>
        <h2>We can't find what you're looking for</h2>
        <p>Try searching with other words or reloading the page</p>
      </Description>
    </Container>
  );
};
export default DataNotFound;
