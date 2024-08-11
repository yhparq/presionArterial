import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function BloodPressureHistory() {
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    const fetchReadings = async () => {
      const token = localStorage.getItem('access');
      try {
        const response = await axios.get('http://localhost:8000/api/blood-pressure-readings/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setReadings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReadings();
  }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return {
      date: date.toLocaleDateString(), // Ejemplo: "08/06/2024"
      time: date.toLocaleTimeString(), // Ejemplo: "10:45:00 AM"
    };
  };

  return (
    <Container>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Historial de Presión Arterial
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Fecha</TableCell>
              <TableCell>Hora</TableCell>
              <TableCell>Sistólica</TableCell>
              <TableCell>Diastólica</TableCell>
              <TableCell>Pulso</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {readings.map((reading) => {
              const { date, time } = formatDate(reading.timestamp);
              return (
                <TableRow key={reading.id}>
                  <TableCell>{date}</TableCell>
                  <TableCell>{time}</TableCell>
                  <TableCell>{reading.systolic}</TableCell>
                  <TableCell>{reading.diastolic}</TableCell>
                  <TableCell>{reading.pulse}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default BloodPressureHistory;
