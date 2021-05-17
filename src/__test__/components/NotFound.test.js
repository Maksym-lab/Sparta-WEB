import React from 'react';
import { mount } from 'enzyme';
import NotFound from '../../pages/NotFound';
describe('<Home />', () => {
  const notFound = mount(<NotFound />);
  test('Render of Home component', () => {
    expect(notFound.length).toEqual(1);
  });
});
