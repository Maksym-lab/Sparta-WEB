import React from 'react';
import { mount } from 'enzyme';
import AddOffer from '../../pages/AddOffer';
describe('<AddOffer />', () => {
  const addOffer = mount(<AddOffer />);
  test('Render of AddOffer page', () => {
    expect(addOffer.length).toEqual(1);
  });
});
