import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/Home';
describe('<Home />', () => {
  const home = shallow(<Home />);
  test('Render of Home component', () => {
    expect(home.length).toEqual(1);
  });
});
