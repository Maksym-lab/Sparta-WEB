import React from 'react';
import { Helmet } from 'react-helmet';
import Search from '../../components/Search';
import useInputValue from '../../hooks/useInputValue';
import PreviewCardContainer from '../../containers/PreviewCardContainer';
import PreviewCardContainerWithSearch from '../../containers/PreviewCardContainerWithSearch';
import Modal from '../../components/Modal';
const Home = ({ imagesBaseUrl }) => {
  const [keyWord, setKeyWord] = useInputValue('');
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
      <Search role="searchbox" keyWord={keyWord} setKeyWord={setKeyWord} />
      {keyWord.value ?
        <PreviewCardContainerWithSearch role="main" keyword={keyWord.value} imagesBaseUrl={imagesBaseUrl} /> :
        <PreviewCardContainer role="main" imagesBaseUrl={imagesBaseUrl} />}
    </>
  );
};
export default Home;
