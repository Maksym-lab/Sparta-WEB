import React from 'react';
import { Router } from '@reach/router';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
const App = () => {
  return (
    <Router>
      <NotFound default />
      <Home path='/' />
    </Router>
  )
}
export default App;
