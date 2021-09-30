import React from 'react';
import { shallow } from 'enzyme';
import Detail from '../../pages/Detail';
describe('<Header />', () => {
  const detail = shallow(<Detail />);
  test('Render of Header component', () => {
    expect(detail.length).toEqual(1);
  });
});
