import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../pages/Register';
describe('<Register />', () => {
  const register = shallow(<Register />);
  test('Render of Header component', () => {
    expect(register.length).toEqual(1);
  });
});
