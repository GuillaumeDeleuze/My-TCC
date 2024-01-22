import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

const styles = {
  root: {
    maxWidth: 345,
    width: '100%',
    boxShadow:
      '5px 5px 0px 0px rgba(58,64,79,0.1), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);'
  }
};

interface ThemeCardProps {
  id: string;
  imageUrl: string;
  title: string;
  shortDescription: string;
  type: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ imageUrl, title, shortDescription, id, type }) => {
  console.log(imageUrl);
  const defaultImageUrl = '/assets/icons/themeIcons/colored/Observation.svg';

  return (
    <Card sx={styles.root}>
      <CardActionArea component={Link} to={`/${type}/${id}`}>
        <CardMedia
          sx={{ objectFit: 'none' }}
          component="img"
          height="180"
          image={defaultImageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ThemeCard;
