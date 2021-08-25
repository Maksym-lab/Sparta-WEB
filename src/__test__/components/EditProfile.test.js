import React from 'react';
import { mount } from 'enzyme';
import EditProfile from '../../pages/EditProfile';
describe('<EditProfile />', () => {
  const editProfile = mount(<EditProfile />);
  test('Render of EditProfile page', () => {
    expect(editProfile.length).toEqual(1);
  });
});
