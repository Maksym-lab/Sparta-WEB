import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
const REGISTER_USER = gql`
  mutation register(
    $email: String!,
    $firstName: String!, 
    $lastName: String!, 
    $password: String!, 
    $role: ID!) {
    kumpelRegister(
      email: $email, 
      firstName: $firstName, 
      lastName: $lastName,
      password: $password,
      role: $role
    ) {
      user {
        id
      }
    }
  }
`;
const RegisterMutation = ({ children }) => {
  return (
    <Mutation mutation={REGISTER_USER}>
      {children}
    </Mutation>
  );
};
export default RegisterMutation;
