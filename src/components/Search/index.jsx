import React from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, SearchContainer } from './styles';
import backgroundHome from '../../assets/images/BackgroundHome.webp';
const imageBackgroundStyle = {
  backgroundImage: `url(${backgroundHome})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const Search = ({ keyWord, setKeyWord }) => {
  return (
    <SearchContainer style={imageBackgroundStyle}>
      <Container role="none">
        <input
          {...keyWord}
          tabIndex="0"
          aria-label="search"
          type="search"
          placeholder="Search anywhere in Mexico City"
          htmlFor="search"
        />
        <MdSearch role="none" />
      </Container>
    </SearchContainer>
  );
};
export default Search;
