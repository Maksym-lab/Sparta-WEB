import React from 'react';
import { Link } from '@reach/router';
import { MdPanoramaFishEye } from 'react-icons/md';
import { Hero, Illustration, Page, Description, Button } from './styles';
import womanIllustration from '../../assets/images/notFoundIllustration.svg';
const NotFound = () => {
  return (
    <Hero role="group">
      <Illustration role="figure">
        <Page role="group" aria-label="window Illustrator">
          <div role="none">
            <MdPanoramaFishEye role="none" />
            <MdPanoramaFishEye role="none" />
            <MdPanoramaFishEye role="none" />
          </div>
          <hr />
          <h1 title="error 404">404</h1>
        </Page>
        <img src={womanIllustration} alt="Illustration of a woman" />
      </Illustration>
      <Description role="contentinfo">
        <h3>Ooops!</h3>
        <h2>Page not Found</h2>
        <p>Sorry the page you are looking for does not exist</p>
      </Description>
      <Link to="/">
        <Button tabIndex="0" name="Return button">Return</Button>
      </Link>
    </Hero>
  );
};
export default NotFound;
