import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
const App = () => {
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" />
      </Router>
    </Layout>
  );
};
export default App;
