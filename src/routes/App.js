import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';
const App = () => {
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Detail path="/detail" />
      </Router>
    </Layout>
  );
};
export default App;
