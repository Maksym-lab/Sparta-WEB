import React from 'react';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
const LIKE_ROOM = gql`
mutation likeRoom($roomId: Int!, $userId: Int!) {
  roomFavoritesAdd(roomId: $roomId, userId: $userId) {
    favoriteRoom {
      id
    }
  }
}
`;
const ToggleLikeMutation = ({ children }) => {
  return (
    <Mutation mutation={LIKE_ROOM}>
      {children}
    </Mutation>
  );
};
export default ToggleLikeMutation;
