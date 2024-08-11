import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

function ChallengesSection() {
    const challenges = [
        'Caminar 10,000 pasos al día durante una semana',
        'Beber 8 vasos de agua al día durante una semana',
        'Reducir el consumo de sal a menos de 2,300 mg por día',
        // Añadir más desafíos según sea necesario
    ];

    return (
        <Paper sx={{ padding: 4 }}>
            <Typography variant="h6" gutterBottom>
                Retos de Bienestar
            </Typography>
            <List>
                {challenges.map((challenge, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={challenge} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
}

export default ChallengesSection;
