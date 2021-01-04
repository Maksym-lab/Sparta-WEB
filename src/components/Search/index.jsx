import React from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import { Container } from './styles';
const Search = () => {
  return (
    <Container>
      <MdClose />
      <input type="text" placeholder="Search anywhere in Mexico City" />
      <MdSearch />
    </Container>
  );
};
export default Search;
