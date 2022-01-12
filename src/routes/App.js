import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Detail from '../containers/Detail';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import AddOffer from '../pages/AddOffer';
import Login from '../pages/Login';
import EditProfile from '../pages/EditProfile';
import Favorites from '../containers/Favorites';
import { Context } from '../Context';
const App = () => {
  const imagesBaseUrl = 'https:
  const { isAuth, userId, role } = useContext(Context);
  return (
    <Layout>
      <Router>
        <NotFound default />
        <Home path="/" imagesBaseUrl={imagesBaseUrl} />
        <Detail path="/detail/:id" imagesBaseUrl={imagesBaseUrl} />
        {isAuth && role === '2' && <Redirect from="/addoffer" to="/" />}
        {!isAuth && <Login path="/login" />}
        {!isAuth && <Register path="/register" />}
        {!isAuth && <Redirect from="/myfavorites" to="/login" />}
        {!isAuth && <Redirect from="/addoffer" to="/login" />}
        {!isAuth && <Redirect from="/editprofile" to="/login" />}
        <EditProfile path="/editprofile" userId={userId} />
        <Favorites path="/myfavorites" userId={userId} imagesBaseUrl={imagesBaseUrl} />
        <AddOffer path="/addoffer" />
        <Register path="/register" />
      </Router>
    </Layout>
  );
};
export default App;
