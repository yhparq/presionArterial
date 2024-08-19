import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/BloodPressureHistory.css'; // Importa la hoja de estilos

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
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
  };

  return (
    <div className="container-table">
      <h2 className='fjalla-one-regular'>Historial de Presión Arterial</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Sistólica</th>
              <th>Diastólica</th>
              <th>Pulso</th>
            </tr>
          </thead>
          <tbody>
            {readings.map((reading) => {
              const { date, time } = formatDate(reading.timestamp);
              return (
                <tr key={reading.id}>
                  <td>{date}</td>
                  <td>{time}</td>
                  <td>{reading.systolic}</td>
                  <td>{reading.diastolic}</td>
                  <td>{reading.pulse}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BloodPressureHistory;