import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
const GET_FAVORITES = gql`
  query getFavorites($userId: Int, $page: Int) {
    roomsFavorites(userId: $userId, page: $page, limit: 10) {
      page
      hasNext
      data {
        id
        room {
          id
          title
          mainImage
          price
          address
          availabilityDate
          host {
            id
            fullName
            profile {
              id
              picture
            }
          }
        }
      }
    }
  }
`;
const withFavorites = graphql(GET_FAVORITES, {
  options: ({ userId }) => ({ variables: { userId, page: 1 } }),
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
export default withFavorites;
