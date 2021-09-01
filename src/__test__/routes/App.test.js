import React from 'react';
import { mount } from 'enzyme';
import App from '../../routes/App';
describe('<App />', () => {
  const app = mount(<App />);
  test('Render of App component', () => {
    expect(app.length).toEqual(1);
  });
});
