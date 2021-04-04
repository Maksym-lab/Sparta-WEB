import React from 'react';
import { mount } from 'enzyme';
import PreviewCardContainer from '../../components/PreviewCardContainer';
describe('<Header />', () => {
  const previewCardContainer = mount(<PreviewCardContainer />);
  test('Render of Header component', () => {
    expect(previewCardContainer.length).toEqual(1);
  });
});
