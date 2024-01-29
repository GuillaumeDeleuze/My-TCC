import * as React from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  GridToolbarContainer
} from '@mui/x-data-grid';

interface Row {
  id: number;
  [key: string]: any;
  isNew?: boolean;
}

interface ToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void;
  columnsFields: string[];
}

function Toolbar(props: ToolbarProps) {
  const { setRows, setRowModesModel, columnsFields } = props;

  const createEmptyRow = (columnsFields: string[], id: number) => {
    const newRow: Row = { id };
    columnsFields.forEach((field) => {
      newRow[field] = '';
    });
    return newRow;
  };

  const handleClick = () => {
    const newId = Math.floor(Math.random() * 100);

    setRows((oldRows) => [...oldRows, createEmptyRow(columnsFields, newId)]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [newId]: { mode: GridRowModes.Edit, fieldToFocus: columnsFields[0] }
    }));
  };

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default Toolbar;
