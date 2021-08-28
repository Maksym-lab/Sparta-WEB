import React from 'react';
import { shallow } from 'enzyme';
import Offers from '../../pages/Offers';
describe('<Offers />', () => {
  const offers = shallow(<Offers />);
  test('Render of Offers page', () => {
    expect(offers.length).toEqual(1);
  });
});
