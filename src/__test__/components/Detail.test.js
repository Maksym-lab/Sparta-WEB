import React from 'react';
import { shallow } from 'enzyme';
import Detail from '../../pages/AddOffer';
describe('<Detail />', () => {
  const detail = shallow(<Detail />);
  test('Render of AddOffer page', () => {
    expect(detail.length).toEqual(1);
  });
});
