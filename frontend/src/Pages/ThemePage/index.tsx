import React from 'react';
import AvatarList from '../../components/AvatarList';
import { useQuery } from '@apollo/client';
import { GET_THEME } from '../../graphql/queries';
import { useParams } from 'react-router-dom';
import ListPage from '../../components/ListPage';

const ThemePage: React.FC = () => {
  const { themeId } = useParams();

  const { loading, error, data } = useQuery(GET_THEME, {
    variables: { themeId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const exerciseList = data.theme.exercises;
  const theme = data.theme;

  return (
    <>
      <ListPage title={theme.title} description={theme.description}>
        <AvatarList type="exercise" elementsList={exerciseList} />
      </ListPage>
    </>
  );
};

export default ThemePage;
