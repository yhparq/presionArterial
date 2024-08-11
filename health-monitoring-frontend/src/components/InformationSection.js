import React from 'react';
import { Paper, Typography } from '@mui/material';

function InformationSection() {
    return (
        <Paper sx={{ padding: 4 }}>
            <Typography variant="h6" gutterBottom>
                Información de Salud
            </Typography>
            <Typography variant="body1">
                Aquí puedes proporcionar información educativa sobre la presión arterial, consejos para mantenerla controlada, y más.
            </Typography>
        </Paper>
    );
}

export default InformationSection;
