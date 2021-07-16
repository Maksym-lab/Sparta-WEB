import React from 'react';
import { MdPanoramaFishEye } from 'react-icons/md';
import { Hero, Illustration, Page, Description, Button } from './styles';
import womanIllustration from '../../assets/images/notFoundIllustration.svg';
const NotFound = () => {
  return (
    <Hero>
      <Illustration>
        <Page>
          <div>
            <MdPanoramaFishEye />
            <MdPanoramaFishEye />
            <MdPanoramaFishEye />
          </div>
          <hr />
          <h1>404</h1>
        </Page>
        <img src={womanIllustration} alt="" />
      </Illustration>
      <Description>
        <h3>Ooops!</h3>
        <h2>Page not Found</h2>
        <p>Sorry the page you are looking for does not exist</p>
      </Description>
      <Button>Return</Button>
    </Hero>
  );
};
export default NotFound;
