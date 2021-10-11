import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Detail from '../containers/Detail';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import AddOffer from '../pages/AddOffer';
import Login from '../pages/Login';
import EditProfile from '../pages/EditProfile';
const App = () => {
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" />
        <Detail path="/detail/:id" />
        <Register path="/register" />
        <AddOffer path="/addoffer" />
        <Login path="/login" />
        <EditProfile path="/editprofile" />
      </Router>
    </Layout>
  );
};
export default App;
