import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
const SEARCH_ROOMS = gql`
  query searchRooms($keyword: String!, $page: Int) {
    roomsSearch(textToSearch: $keyword, page: $page, limit: 10) {
      page
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
const withSearch = graphql(SEARCH_ROOMS, {
  options: ({ keyword }) => ({ variables: { keyword, page: 1 } }),
  props: ({ data }) => ({
    data: {
      ...data,
      loadMore: () => data.fetchMore({
        variables: { page: data.roomsSearch.page + 1 },
        updateQuery: (previousResult = {}, { fetchMoreResult = {} }) => {
          const previousRooms = previousResult.rooms || {};
          const currentRooms = fetchMoreResult.rooms || {};
          const previousData = previousRooms.data || [];
          const currentData = currentRooms.data || [];
          return {
            roomsSearch: {
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
export default withSearch;
