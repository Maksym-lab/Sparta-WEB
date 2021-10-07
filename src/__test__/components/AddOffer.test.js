import React from 'react';
import { shallow } from 'enzyme';
import AddOffer from '../../pages/AddOffer';
describe('<AddOffer />', () => {
  const addOffer = shallow(<AddOffer />);
  test('Render of AddOffer page', () => {
    expect(addOffer.length).toEqual(1);
  });
});
