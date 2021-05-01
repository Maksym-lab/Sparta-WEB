import React from 'react';
import { mount } from 'enzyme';
import Home from '../../pages/Home';
describe('<Home />', () => {
  const home = mount(<Home />);
  test('Render of Home component', () => {
    expect(home.length).toEqual(1);
  });
});
