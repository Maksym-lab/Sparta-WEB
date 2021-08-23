import React from 'react';
import { mount } from 'enzyme';
import PreviewCardContainer from '../../components/PreviewCardContainer';
describe('<Header />', () => {
  const props = {
    data: {
      loading: 'false',
      error: 'false',
      rooms: {
        hasNext: 'false',
        data: [1],
      },
      loadMore: {},
    },
  };
  const previewCardContainer = mount(<PreviewCardContainer {...props} />);
  test('Render of Header component', () => {
    expect(previewCardContainer.length).toEqual(1);
  });
});
