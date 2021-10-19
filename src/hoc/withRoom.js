import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
const GET_ROOM_ID = gql`
query getRoom($id: Int!) {
  room(roomId: $id) {
    id
    title
    description
    mainImage
    host {
      fullName
      firstName
      email
      phoneNumber
    }
    price
    address
    features {
      id
      feature {
        id
        name
        icon
        isBoolean
        description
        category {
          id
          name
        }
      }
      number
    }
    availabilityDate
    images {
      id
      image
    }
    places {
      id
      details
      category {
        id
        name
        description
      }
    }
  }
}
`;
const withRoom = graphql(GET_ROOM_ID, {
  options: ({ id }) => ({ variables: { id } }),
});
export default withRoom;
