import React from 'react';
import { mount } from 'enzyme';
import Detail from '../../pages/Detail';
describe('<Header />', () => {
  const detail = mount(<Detail />);
  test('Render of Header component', () => {
    expect(detail.length).toEqual(1);
  });
});
