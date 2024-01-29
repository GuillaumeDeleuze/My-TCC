import React from 'react';
import { Container, Typography, Divider } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    margin: '54px 0 16px',
    color: '#5B5EA6'
  },
  separator: {
    height: 80,
    border: '3px solid #5B5EA6',
    borderRadius: 2
  },
  description: {
    margin: '32px 0px'
  },
  list: {
    marginTop: 16,
    width: '100%'
  }
};

interface ListPageProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const ListPage: React.FC<ListPageProps> = ({ title, description, children }) => {
  return (
    <Container sx={styles.root}>
      <Typography variant="h2" sx={styles.title}>
        {title}
      </Typography>
      <Divider orientation="vertical" sx={styles.separator} />
      <Typography sx={styles.description} variant="body2">
        {description}
      </Typography>
      <div style={styles.list}>{children}</div>
    </Container>
  );
};

export default ListPage;
