import React from 'react';
import { mount } from 'enzyme';
import Register from '../../pages/Register';
describe('<Register />', () => {
  const register = mount(<Register />);
  test('Render of Header component', () => {
    expect(register.length).toEqual(1);
  });
});
