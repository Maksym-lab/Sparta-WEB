import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from './styles';
import PreviewCard from '../PreviewCard';
import Error from '../Error';
import Loading from '../Loading';
import DataNotFound from '../DataNotFound';
const PreviewCardContainer = (props) => {
  const {
    data: {
      loading,
      error,
      rooms,
      roomsSearch,
      loadMore,
    },
    imagesBaseUrl,
  } = props;
  if (loading) return <Loading />;
  if (error) return <Error />;
  const {
    hasNext,
    data = [],
  } = rooms || roomsSearch || {};
  if (data.length === 0) return <DataNotFound />;
  return (
    <InfiniteScroll
      loadMore={loadMore}
      hasMore={hasNext}
    >
      <Grid aria-label="list of available rooms">
        {data
          .map((room) => <PreviewCard key={room.id} {...room} imagesBaseUrl={imagesBaseUrl} />)}
      </Grid>
    </InfiniteScroll>
  );
};
export default PreviewCardContainer;
