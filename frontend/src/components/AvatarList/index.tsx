import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ThemeCard from '../ThemeCard';

const styles = {
  theme: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 3
  }
};

interface Theme {
  id: string;
  imageUrl: string;
  title: string;
  shortDescription: string;
}

interface AvatarListProps {
  themes: Theme[];
  type: string;
}

const AvatarList: React.FC<AvatarListProps> = ({ themes, type }) => {
  return (
    <>
      <Grid container spacing={3}>
        {themes.map((theme) => (
          <Grid key={theme.id} item md={6} xl={4}>
            <Box key={theme.id} sx={styles.theme}>
              <ThemeCard
                type={type}
                id={theme.id}
                imageUrl={theme.imageUrl}
                title={theme.title}
                shortDescription={theme.shortDescription}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AvatarList;
