import React from 'react';
import { mount } from 'enzyme';
import Header from '../../components/Header';
describe('Header', () => {
  const header = mount(<Header />);
  test('Render of Header component', () => {
    expect(header.length).toEqual(1);
  });
});
