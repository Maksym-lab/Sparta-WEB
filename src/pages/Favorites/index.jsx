import React from 'react';
import { MdFavorite, MdClose } from 'react-icons/md';
import InfiniteScroll from 'react-infinite-scroller';
import MovingBanner from '../../assets/images/MovingBanner.jpg';
import Badge from '../../components/Badge';
import Grid from './styles';
import PreviewCard from '../../components/PreviewCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import { Main, Hero, Section } from '../../components/RoomForm/styles';
import DataNotFound from '../../components/DataNotFound';
const Favorites = (props) => {
  const {
    data: {
      loading = false,
      error = false,
      roomsFavorites = {},
      loadMore = {},
    } = {},
  } = props;
  if (loading) return <Loading />;
  if (error) return <Error />;
  const {
    hasNext = false,
    data = [],
  } = roomsFavorites || {};
  if (data.length === 0) return <DataNotFound />;
  return (
    <Main>
      <Hero>
        <img src={MovingBanner} alt="" />
        <Badge icon={MdFavorite} message="My favorites" />
      </Hero>
      <Section>
        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasNext}
        >
          <Grid aria-label="list of favorites rooms">
            {data
              .map(({ id, room }) => (
                <li key={id}>
                  <MdClose />
                  <PreviewCard {...room} showFav={false} />
                </li>
              ))}
          </Grid>
        </InfiniteScroll>
      </Section>
    </Main>
  );
};
export default Favorites;
