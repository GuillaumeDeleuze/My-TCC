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

export const GET_THEME = gql`
  query Theme($themeId: ID!) {
    theme(id: $themeId) {
      id
      title
      description
      exercises {
        id
        title
        shortDescription
      }
    }
  }
`;
