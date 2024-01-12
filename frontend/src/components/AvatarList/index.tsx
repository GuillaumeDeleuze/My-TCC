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
  id: number;
  imageUrl: string;
  title: string;
  shortDescription: string;
  // link: string;
}

interface AvatarListProps {
  themes: Theme[];
}

const AvatarList: React.FC<AvatarListProps> = ({ themes }) => {
  return (
    <>
      <Grid container spacing={2}>
        {themes.map((theme) => (
          <Grid key={theme.id} item xs={4}>
            <Box key={theme.id} sx={styles.theme}>
              <ThemeCard
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
