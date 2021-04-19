import React from 'react';
import { MdSearch, MdClose } from 'react-icons/md';
import { Container, SearchContainer, Flex, ImageDown, MapIcon } from './styles';
import backgroundHome from '../../assets/images/BackgroundHome.png';
import mapIcon from '../../assets/images/MapIcon.svg';
import arrowDown from '../../assets/images/ArrowDown.svg';
const imageBackgroundStyle = {
  backgroundImage: `url(${backgroundHome})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const Search = () => {
  return (
    <SearchContainer style={imageBackgroundStyle}>
      <Container>
        <MdClose />
        <input type="text" placeholder="Search anywhere in Mexico City" />
        <MdSearch />
      </Container>
      <Flex>
        <div>
          <button type="button">
            Price{' '}
            <ImageDown src={arrowDown} alt="order by highest or lowest price" />
          </button>
          <button type="button">
            Latest <ImageDown src={arrowDown} alt="order by newest or oldest" />
          </button>
        </div>
        <MapIcon src={mapIcon} alt="map" />
      </Flex>
    </SearchContainer>
  );
};
export default Search;
