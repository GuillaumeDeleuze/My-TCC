import { gql } from '@apollo/client';

export const GET_THEMES = gql`
  query themes {
    themes {
      results {
        id
        title
        shortDescription
        exercises {
          title
        }
      }
    }
  }
`;
