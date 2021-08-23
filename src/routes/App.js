import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import AddOffer from '../pages/AddOffer';
const App = () => {
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Detail path="/detail/:id" />
        <Register path="/register" />
        <AddOffer path="/addoffer" />
      </Router>
    </Layout>
  );
};
export default App;
