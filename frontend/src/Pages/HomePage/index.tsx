import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import AvatarList from '../../components/AvatarList';
import { useQuery } from '@apollo/client';
import { GET_THEMES } from '../../graphql/queries';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    textAlign: 'center'
  },
  themesListTitle: {
    textAlign: 'start'
  },
  themesRoot: {
    borderBottom: '1px solid #848484',
    margin: '20px 0px',
    width: '100%'
  }
};

const Homepage: React.FC = () => {
  const { loading, error, data } = useQuery(GET_THEMES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const backthemes = data.themes.results;

  console.log('themes', backthemes);

  return (
    <Container sx={styles.root}>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quisquam soluta ea ex
        vitae aspernatur ut perspiciatis corporis laborum aliquid architecto rerum officiis nihil
        illum, delectus alias incidunt minima? Libero.
      </Typography>
      <Box sx={styles.themesRoot}>
        <Typography sx={styles.themesListTitle} variant="h5">
          Liste des thèmes
        </Typography>
      </Box>
      <AvatarList type="theme" themes={backthemes} />
    </Container>
  );
};

export default Homepage;
