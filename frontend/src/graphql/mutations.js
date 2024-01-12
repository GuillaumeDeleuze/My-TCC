import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation Signup($user: SignupInput!) {
    signup(user: $user) {
      token
      user {
        id
        email
        name
      }
    }
  }
`;

export const LOGIN = gql`
  mutation Login($credentials: LoginInput!) {
    login(credentials: $credentials) {
      token
      user {
        id
        email
      }
    }
  }
`;
