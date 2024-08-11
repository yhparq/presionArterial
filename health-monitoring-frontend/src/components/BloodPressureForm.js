import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

function BloodPressureForm() {
  const [systolic, setSystolic] = useState('');
  const [diastolic, setDiastolic] = useState('');
  const [pulse, setPulse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access');
    const reading = { systolic, diastolic, pulse };
    try {
      await axios.post('http://localhost:8000/api/blood-pressure-readings/', reading, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('¡Lectura enviada con éxito!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 500,
          margin: 'auto',
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Ingresar Lectura de Presión Arterial
        </Typography>
        <TextField
          label="Sistólica"
          type="number"
          value={systolic}
          onChange={(e) => setSystolic(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Diastólica"
          type="number"
          value={diastolic}
          onChange={(e) => setDiastolic(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Pulso"
          type="number"
          value={pulse}
          onChange={(e) => setPulse(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Enviar
        </Button>
      </Box>
    </Container>
  );
}

export default BloodPressureForm;
