import React from 'react';
import { Helmet } from 'react-helmet';
import Search from '../../components/Search';
import PreviewCardContainer from '../../containers/PreviewCardContainer';
import Modal from '../../components/Modal';
const Home = () => {
  return (
    <>
      <Helmet>
        <meta
          charSet="utf-8"
          lang="en"
          name="description"
          content="kumpel is a platform to find a room or to be able to make an offer of the room. The perfect partner exists, you just have to look for it."
        />
        <meta name="author" content="Spartans team" />
        <meta name="copyright" content="All rights reserved to spartans team" />
        <meta name="keywords" content="room, rooms, roomie, roomies, city, student, university, places, airbnb, bedroom" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Kumpel || Find your roomie </title>
      </Helmet>
      <Modal aria-modal="true" />
      <Search role="searchbox" />
      <PreviewCardContainer role="main" />
    </>
  );
};
export default Home;
