import React from 'react';
import { shallow } from 'enzyme';
import Favorites from '../../pages/Favorites';
describe('<Favorites />', () => {
  const favorites = shallow(<Favorites />);
  test('Render of Favorites component', () => {
    expect(favorites.length).toEqual(1);
  });
});
