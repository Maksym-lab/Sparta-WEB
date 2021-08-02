import React from 'react';
import { mount } from 'enzyme';
import Offers from '../../pages/Offers';
describe('<Offers />', () => {
  const offers = mount(<Offers />);
  test('Render of Offers page', () => {
    expect(offers.length).toEqual(1);
  });
});
