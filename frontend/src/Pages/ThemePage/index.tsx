import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AvatarList from '../../components/AvatarList';
import { themes } from '../../constants/ThemeList';

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
  return (
    <Container sx={styles.root}>
      <Typography variant="h1" sx={styles.title}>
        Mon Thème
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lectus rutrum, placerat
        urna id, consequat urna.
      </Typography>
      <Typography sx={styles.themesListTitle} variant="h3">
        Liste des exercices
      </Typography>
      <AvatarList themes={themes} />
    </Container>
  );
};

export default ThemePage;
