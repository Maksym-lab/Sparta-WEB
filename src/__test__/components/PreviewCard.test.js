import React from 'react';
import { mount } from 'enzyme';
import PreviewCard from '../../components/PreviewCard';
describe('<PreviewCard />', () => {
  const previewCard = mount(<PreviewCard />);
  test('Render of Header component', () => {
    expect(previewCard.length).toEqual(1);
  });
});
