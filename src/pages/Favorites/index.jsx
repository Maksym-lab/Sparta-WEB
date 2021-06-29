import React from 'react';
import { MdFavorite, MdClose } from 'react-icons/md';
import MovingBanner from '../../assets/images/MovingBanner.jpg';
import Badge from '../../components/Badge';
import Grid from './styles';
import PreviewCard from '../../components/PreviewCard';
import { Main, Hero, Section } from '../AddOffer/styles';
const Favorites = () => {
  return (
    <Main>
      <Hero>
        <img src={MovingBanner} alt="" />
        <Badge icon={MdFavorite} message="My favorites" />
      </Hero>
      <Section>
        <Grid>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
          <li>
            <MdClose />
            <PreviewCard />
          </li>
        </Grid>
      </Section>
    </Main>
  );
};
export default Favorites;
