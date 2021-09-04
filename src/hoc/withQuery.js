import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
const GET_ROOMS = gql`
query getRooms($page: Int) {
  rooms(page: $page) {
    page
    pages
    hasNext
    data {
      id
      title
      mainImage
      host {
        fullName
      }
      address
      price
      availabilityDate
    }
  }
}
`;
const withQuery = graphql(GET_ROOMS, {
  options: () => ({ variables: { page: 1 } }),
  props: ({ data }) => ({
    data: {
      ...data,
      loadMore: () => data.fetchMore({
        variables: { page: data.rooms.page + 1 },
        updateQuery: (previousResult = {}, { fetchMoreResult = {} }) => {
          const previousRooms = previousResult.rooms || {};
          const currentRooms = fetchMoreResult.rooms || {};
          const previousData = previousRooms.data || [];
          const currentData = currentRooms.data || [];
          return {
            rooms: {
              ...previousRooms,
              data: [...previousData, ...currentData],
              page: currentRooms.page,
              hasNext: currentRooms.hasNext,
            },
          };
        },
      }),
    },
  }),
});
export default withQuery;
