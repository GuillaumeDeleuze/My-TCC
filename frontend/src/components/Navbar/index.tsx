import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';

const styles = {
  root: {
    borderBottom: '1px solid black'
  },
  listRoot: {
    display: 'flex',
    listStyleType: 'none',
    paddingLeft: '0px'
  },
  secondItemRoot: {
    paddingLeft: '0px'
  },
  thirdItemRoot: {
    paddingLeft: '0px',
    textAlign: 'end'
  }
};

const Navbar: React.FC = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Grid container spacing={2} justifyContent="space-between" alignItems="center">
          <Grid item xs>
            <ul style={styles.listRoot}>
              <li>
                <Typography variant="body1">Acceuil</Typography>
              </li>
              <li>
                <Typography sx={{ ml: 2 }} variant="body1">
                  Mes favoris
                </Typography>
              </li>
              <li>
                <Typography sx={{ ml: 2 }} variant="body1">
                  Mon profil
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs style={styles.secondItemRoot}>
            <Typography variant="body1">My TCC</Typography>
          </Grid>
          <Grid item xs sx={styles.thirdItemRoot}>
            <Button variant="outlined">
              <Typography variant="body1">Se connecter</Typography>
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;
