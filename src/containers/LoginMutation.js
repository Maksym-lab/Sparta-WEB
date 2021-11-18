import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';
const USER_LOGIN = gql`
  mutation login(
    $email: String!,
    $password: String!) {
    kumpelLogin(
      email: $email,
      password: $password) {
      token
    }
  }
`;
const LoginMutation = ({ children }) => {
  return (
    <Mutation mutation={USER_LOGIN}>
      {children}
    </Mutation>
  );
};
export default LoginMutation;
