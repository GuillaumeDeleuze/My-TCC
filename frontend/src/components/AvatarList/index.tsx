import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AvatarWithTitle from '../AvatarWithTitle';

const styles = {
  theme: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 3
  }
};

interface Element {
  id: string;
  imageUrl: string;
  title: string;
  shortDescription: string;
}

interface AvatarListProps {
  elementsList: Element[];
  type: string;
}

const AvatarList: React.FC<AvatarListProps> = ({ elementsList, type }) => {
  return (
    <>
      <Grid container spacing={3}>
        {elementsList.map((element) => (
          <Grid key={element.id} item xs={3}>
            <Box key={element.id} sx={styles.theme}>
              <AvatarWithTitle
                type={type}
                id={element.id}
                imageUrl={element.imageUrl}
                title={element.title}
                shortDescription={element.shortDescription}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AvatarList;
