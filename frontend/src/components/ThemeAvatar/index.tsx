import React from 'react';
import { styled } from '@mui/system';

const Image = styled('img')({
  width: 120,
  height: 120,
  borderRadius: '5px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '10px',
  cursor: 'pointer',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)'
  },
  padding: '10px'
});

const Title = styled('h3')({
  fontSize: '16px',
  margin: '0',
  cursor: 'pointer'
});

interface ThemeAvatarProps {
  imageUrl: string;
  title: string;
  // link: string;
}

const ThemeAvatar: React.FC<ThemeAvatarProps> = ({ imageUrl, title }) => {
  return (
    <>
      <Image src={imageUrl} alt={title} />
      <Title>{title}</Title>
    </>
  );
};

export default ThemeAvatar;
