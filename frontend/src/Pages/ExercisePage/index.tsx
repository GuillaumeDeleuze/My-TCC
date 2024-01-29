import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_EXERCISE } from '../../graphql/queries';
import EditableGrid from '../../components/EditableGrid';

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
  description: {
    margin: '32px 0px'
  },
  list: {
    marginTop: 16,
    width: '100%'
  }
};

interface Row {
  id: number;
  [key: string]: any;
  isNew?: boolean;
}

const ExercisePage: React.FC = () => {
  const { exerciseId } = useParams();
  const { loading, error, data } = useQuery(GET_EXERCISE, {
    variables: { exerciseId }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const exercise = data.exercise;

  const columns = [
    { field: 'nom', headerName: 'Nom', editable: true, width: 330 },
    { field: 'prenom', headerName: 'Prenom', editable: true, width: 330 },
    { field: 'age', headerName: 'Age', editable: true, width: 330 }
  ];

  const columnsFields = columns.map((col) => col.field);
  const createFirstRow = (columnsFields: string[]) => {
    const newRow: Row = { id: 1 };
    columnsFields.forEach((field) => {
      newRow[field] = '';
    });
    return newRow;
  };

  const firstRow = [createFirstRow(columnsFields)];

  return (
    <Container sx={styles.root}>
      <Typography variant="h2" sx={styles.title}>
        {exercise.title}
      </Typography>
      <Typography sx={styles.description} variant="body2">
        {exercise.description}
      </Typography>
      <EditableGrid columns={columns} firstRow={firstRow} />
    </Container>
  );
};

export default ExercisePage;
