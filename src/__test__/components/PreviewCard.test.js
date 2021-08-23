import React from 'react';
import { mount } from 'enzyme';
import PreviewCard from '../../components/PreviewCard';
describe('<PreviewCard />', () => {
  const data = {
    host: {
      fullname: 'Jane Cooper',
    },
  };
  const previewCard = mount(<PreviewCard {...data} />);
  test('Render of Header component', () => {
    expect(previewCard.length).toEqual(1);
  });
});
