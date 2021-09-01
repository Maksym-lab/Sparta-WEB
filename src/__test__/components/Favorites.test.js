import React from 'react';
import { mount } from 'enzyme';
import Favorites from '../../pages/Favorites';
describe('<Favorites />', () => {
  const favorites = mount(<Favorites />);
  test('Render of Favorites component', () => {
    expect(favorites.length).toEqual(1);
  });
});
