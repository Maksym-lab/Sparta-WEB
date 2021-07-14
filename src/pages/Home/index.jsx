import React from 'react';
import Search from '../../components/Search';
import PreviewCardContainer from '../../components/PreviewCardContainer';
import Modal from '../../components/Modal';
const Home = () => {
  return (
    <>
      <Modal />
      <Search />
      <PreviewCardContainer />
    </>
  );
};
export default Home;
