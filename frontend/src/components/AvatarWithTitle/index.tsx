import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

const styles = {
  root: {
    cursor: 'pointer',
    textDecoration: 'none'
  },
  imageContainer: {
    height: 120,
    width: 120,
    backgroundColor: '#5B5EA6',
    padding: 2,
    borderRadius: '50%',
    border: '2px solid #5B5EA6',
    overflow: 'hidden',
    transition: 'transform 0.3s ease'
  },
  image: {
    border: '2px solid #ffffff',
    padding: 12,
    borderRadius: '50%'
  },
  title: {
    marginTop: 1,
    color: '#666666'
  }
};

interface AvatarWithTitleProps {
  id: string;
  imageUrl: string;
  title: string;
  shortDescription: string;
  type: string;
}

const AvatarWithTitle: React.FC<AvatarWithTitleProps> = ({
  imageUrl,
  title,
  shortDescription,
  id,
  type
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  console.log(imageUrl);

  const defaultImageUrl = '/assets/icons/themeIcons/line/Observation.svg';

  return (
    <Link to={`/${type}/${id}`} style={styles.root}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        onMouseEnter={() => setMouseEnter(true)}
        onMouseLeave={() => setMouseEnter(false)}>
        <div
          style={{
            ...styles.imageContainer,
            transform: `${mouseEnter ? 'scale(1.1)' : 'scale(1.0)'}`
          }}>
          <img style={styles.image} src={defaultImageUrl} alt={title} />
        </div>
        <Typography sx={styles.title} variant="h6">
          {title}
        </Typography>
      </Grid>
    </Link>
  );
};

export default AvatarWithTitle;
