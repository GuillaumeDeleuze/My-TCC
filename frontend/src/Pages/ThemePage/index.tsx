import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AvatarList from '../../components/AvatarList';
import { useQuery } from '@apollo/client';
import { GET_THEME } from '../../graphql/queries';
import { useParams } from 'react-router-dom';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    textAlign: 'center'
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '24px',
    marginTop: '20px',
    marginBottom: '10px'
  },
  themesListTitle: {
    margin: '20px 0px'
  }
};

const ThemePage: React.FC = () => {
  const { themeId } = useParams();

  const { loading, error, data } = useQuery(GET_THEME, {
    variables: { themeId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const exerciceList = data.theme.exercises;
  const theme = data.theme;

  return (
    <Container sx={styles.root}>
      <Typography variant="h1" sx={styles.title}>
        {theme.title}
      </Typography>
      <Typography variant="body2">{theme.description}</Typography>
      <Typography sx={styles.themesListTitle} variant="h3">
        Liste des exercices
      </Typography>
      <AvatarList type="exercice" themes={exerciceList} />
    </Container>
  );
};

export default ThemePage;
