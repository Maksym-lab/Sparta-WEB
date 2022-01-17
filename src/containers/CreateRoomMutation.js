import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
const CREATE_ROOM = gql`
  mutation createRoom(
    $title: String!
    $description: String!
    $availabilityDate: String
    $address: String!
    $files: Upload!
    $price: Int!
    $visibility: Boolean
    $places: [PlacesInput]!
    $features: [FeaturesInput]!
  ) {
    roomCreate(
      title: $title
      description: $description
      availabilityDate: $availabilityDate
      address: $address
      images: $files
      statusId: 1
      price: $price
      visibility: $visibility
      places: $places
      features: $features
    ) {
      room {
        id
      }
    }
  }
`;
const CreateRoomMutation = ({ children }) => {
  return (
    <Mutation mutation={CREATE_ROOM}>
      {children}
    </Mutation>
  );
};
export default CreateRoomMutation;
