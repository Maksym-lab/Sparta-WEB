import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Form } from './styles';
const SearchHeader = () => {
  return (
    <Container id="container">
      <Form role="search" method="get" action="">
        <label htmlFor="search">
          <MdSearch />
        </label>
        <input type="text" placeholder="search" id="search" />
      </Form>
    </Container>
  );
};
export default SearchHeader;
