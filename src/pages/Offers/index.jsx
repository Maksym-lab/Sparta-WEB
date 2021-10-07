import React from 'react';
import { MdClose, MdEdit, MdAddToPhotos } from 'react-icons/md';
import { Main, Section, Hero } from '../../components/RoomForm/styles';
import PeopleImage from '../../assets/images/PeopleImage.png';
import { Icons, Card } from './styles';
import PreviewCard from '../../components/PreviewCard';
import Badge from '../../components/Badge';
import Grid from '../Favorites/styles';
const Offers = () => {
  return (
    <Main>
      <Hero>
        <img src={PeopleImage} alt="" />
        <Badge />
      </Hero>
      <Section>
        <Grid>
          <li>
            <Icons>
              <MdEdit />
              <MdClose />
            </Icons>
            <PreviewCard />
          </li>
          <li>
            <Icons>
              <MdEdit />
              <MdClose />
            </Icons>
            <PreviewCard />
          </li>
          <li>
            <Card>
              <MdAddToPhotos />
            </Card>
          </li>
        </Grid>
      </Section>
    </Main>
  );
};
export default Offers;
