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
import Favorites from '../containers/Favorites';
const App = () => {
  const imagesBaseUrl = 'https:
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" imagesBaseUrl={imagesBaseUrl} />
        <Detail path="/detail/:id" imagesBaseUrl={imagesBaseUrl} />
        <Register path="/register" />
        <AddOffer path="/addoffer" />
        <Login path="/login" />
        <EditProfile path="/editprofile" />
        <Favorites path="/myfavorites" />
      </Router>
    </Layout>
  );
};
export default App;
