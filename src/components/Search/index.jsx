import React from 'react';
import { Container } from './styles';
import { MdSearch, MdClose } from 'react-icons/md';
const Search = () => {
  return (
    <Container>
      <MdClose />
      <input type="text" placeholder='Search anywhere in Mexico City' />
      <MdSearch />
    </Container>
  )
}
export default Search;
