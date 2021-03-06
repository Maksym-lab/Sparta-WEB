import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';
describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render of Footer component', () => {
    expect(footer.length).toEqual(1);
  });
});
describe('Footer Snapshot', () => {
  test('Check the UI of the Footer component', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
