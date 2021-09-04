import React from 'react';
import { shallow } from 'enzyme';
import App from '../../routes/App';
describe('<App />', () => {
  const app = shallow(<App />);
  test('Render of App component', () => {
    expect(app.length).toEqual(1);
  });
});
