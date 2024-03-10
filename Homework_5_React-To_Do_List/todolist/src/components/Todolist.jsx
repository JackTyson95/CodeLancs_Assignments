import { createTheme, ThemeProvider, Box } from '@mui/material';
import React, { useState } from 'react';
import { List, ListItem, ListItemText, IconButton, TextField } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    todo: {
      main: '#f44336',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Arial'].join(','),
  },
});

function Todolist({ style, bgColor }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((item, i) => i !== index);
    setItems(newItems);
  };

  return (
    <Box
      sx={{
        backgroundColor: bgColor,
        color: 'todo.contrastText',
        padding: 2,
        ...style
      }}
    >
      <TextField
        variant="outlined"
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        label="New item"
        sx={{
          '& .MuiInputBase-root': {
            backgroundColor: 'white'
          },
          mt: 1,
          width: '25ch'
        }} 
      />
      <IconButton onClick={handleAddItem}>
        <AddBoxIcon />
      </IconButton>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
            <IconButton edge="end" onClick={() => handleDeleteItem(index)}>
              <DeleteIcon color="action" />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Todolist;