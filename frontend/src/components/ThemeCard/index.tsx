import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@mui/material';

interface ThemeCardProps {
  id: string;
  imageUrl: string;
  title: string;
  shortDescription: string;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ imageUrl, title, shortDescription, id }) => {
  console.log(imageUrl);
  const defaultImageUrl = '/assets/icons/themeIcons/colored/Observation.svg';

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea component={Link} to={`/theme/${id}`}>
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
