import React from 'react';
import { mount } from 'enzyme';
import Layout from '../../components/Layout';
describe('<Layout />', () => {
  const layout = mount(<Layout />);
  test('Render of Layout component', () => {
    expect(layout.length).toEqual(1);
  });
});
