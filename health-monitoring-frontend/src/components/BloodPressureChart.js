import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area,
} from 'recharts';
import { Container, Paper, Typography, Grid } from '@mui/material';

function BloodPressureChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchReadings = async () => {
      const token = localStorage.getItem('access');
      try {
        const response = await axios.get('http://localhost:8000/api/blood-pressure-readings/', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const readings = response.data;
        setData(calculateMovingAverage(readings));
      } catch (error) {
        console.error(error);
      }
    };

    fetchReadings();
  }, []);

  // Función para calcular la media móvil
  const calculateMovingAverage = (data, windowSize = 5) => {
    return data.map((entry, index) => {
      const slice = data.slice(Math.max(0, index - windowSize + 1), index + 1);
      const systolicAverage = slice.reduce((acc, item) => acc + item.systolic, 0) / slice.length;
      const diastolicAverage = slice.reduce((acc, item) => acc + item.diastolic, 0) / slice.length;
      return { ...entry, systolicMovingAverage: systolicAverage, diastolicMovingAverage: diastolicAverage };
    });
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom>
        Análisis de la Presión Arterial
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Gráfica de Presión Arterial
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => {
                    if (name === 'systolic') return [`Sistólica: ${value}`, 'Sistólica'];
                    if (name === 'diastolic') return [`Diastólica: ${value}`, 'Diastólica'];
                    if (name === 'pulse') return [`Pulso: ${value}`, 'Pulso'];
                  }}
                />
                <Legend
                  formatter={(value) => {
                    if (value === 'systolic') return 'Presión Sistólica';
                    if (value === 'diastolic') return 'Presión Diastólica';
                    if (value === 'pulse') return 'Pulso';
                  }}
                />
                <Line type="monotone" dataKey="systolic" stroke="#8884d8" strokeWidth={2} />
                <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="pulse" stroke="#ffc658" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: 20 }}>
            <Typography variant="h6" gutterBottom>
              Media Móvil de Presión Arterial
            </Typography>
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tickFormatter={(value) => new Date(value).toLocaleDateString()}
                />
                <YAxis />
                <Tooltip
                  formatter={(value, name) => {
                    if (name === 'systolicMovingAverage') return [`Sistólica Media: ${value}`, 'Sistólica Media'];
                    if (name === 'diastolicMovingAverage') return [`Diastólica Media: ${value}`, 'Diastólica Media'];
                  }}
                />
                <Legend
                  formatter={(value) => {
                    if (value === 'systolicMovingAverage') return 'Media Móvil Sistólica';
                    if (value === 'diastolicMovingAverage') return 'Media Móvil Diastólica';
                  }}
                />
                <Area type="monotone" dataKey="systolicMovingAverage" stroke="#8884d8" fill="#8884d8" strokeWidth={2} />
                <Area type="monotone" dataKey="diastolicMovingAverage" stroke="#82ca9d" fill="#82ca9d" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BloodPressureChart;
