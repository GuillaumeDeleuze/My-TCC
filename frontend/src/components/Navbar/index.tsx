import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Container, Grid, Button } from '@mui/material';

const styles = {
  root: {
    borderBottom: '1px solid black',
    minHeight: 120
  },
  gridRoot: {
    minHeight: 120
  },
  listRoot: {
    display: 'flex',
    listStyleType: 'none',
    paddingLeft: '0px',
    cursor: 'pointer'
  },
  logo: {
    fontWeight: 'bolder'
  },
  link: {
    textDecoration: 'none'
  },
  linkTitle: {
    transition: '200ms',
    '&:hover': {
      color: '#5B5EA6',
      textDecoration: 'underline'
    }
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
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
          sx={styles.gridRoot}>
          <Grid item xs>
            <ul style={styles.listRoot}>
              <li>
                <Link style={styles.link} to="/">
                  <Typography sx={styles.linkTitle} variant="h5">
                    ACCEUIL
                  </Typography>
                </Link>
              </li>
              <li>
                <Link style={styles.link} to="/themes">
                  <Typography sx={{ ...styles.linkTitle, ml: 3 }} variant="h5">
                    THEMES
                  </Typography>
                </Link>
              </li>
              <li>
                <Typography sx={{ ...styles.linkTitle, ml: 3 }} variant="h5">
                  FAVORIS
                </Typography>
              </li>
              <li>
                <Typography sx={{ ...styles.linkTitle, ml: 3 }} variant="h5">
                  PROFIL
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs style={styles.secondItemRoot}>
            <Link style={styles.link} to="/">
              <Typography style={styles.logo} variant="h2" color="primary">
                My TCC
              </Typography>
            </Link>
          </Grid>
          <Grid item xs sx={styles.thirdItemRoot}>
            <Button variant="outlined">Se connecter</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Navbar;
