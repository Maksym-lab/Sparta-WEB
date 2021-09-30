import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from './styles';
import PreviewCard from '../PreviewCard';
const PreviewCardContainer = (props) => {
  const {
    data: {
      loading,
      error,
      rooms,
      loadMore,
    },
  } = props;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  const {
    hasNext,
    data = [],
  } = rooms || {};
  if (data.length === 0) return <p>{'Sorry, we couldn\'t fint the rooms'}</p>;
  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={hasNext}
    >
      <Grid>
        {data
          .map((room) => <PreviewCard key={room.id} {...room} />)}
      </Grid>
    </InfiniteScroll>
  );
};
export default PreviewCardContainer;
