import React, { useState } from 'react';
import { Container, Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon, AppBar, Toolbar, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBoxIcon from '@mui/icons-material/AddBox'; // Ícono para "Añadir Lectura"
import HistoryIcon from '@mui/icons-material/History'; // Ícono para "Historial"
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Ícono para "Tendencias"
import InfoIcon from '@mui/icons-material/Info'; // Ícono para "Información"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Ícono para "Retos"
import BloodPressureForm from './BloodPressureForm';
import BloodPressureHistory from './BloodPressureHistory';
import BloodPressureChart from './BloodPressureChart';
import InformationSection from './InformationSection'; // Importar sección de información
import ChallengesSection from './ChallengesSection'; // Importar sección de retos
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const [selectedSection, setSelectedSection] = useState('form');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        navigate('/');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed" sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Tablero de Presión Arterial
                    </Typography>
                    <IconButton edge="end" color="inherit" aria-label="logout" onClick={handleLogout}>
                        <LogoutIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{
                    width: { sm: 240 },
                    flexShrink: { sm: 0 },
                    bgcolor: '#f5f5f5',
                    padding: 2
                }}
            >
                <Paper elevation={1} sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ padding: 2 }}>
                        Presión Arterial
                    </Typography>
                    <List>
                        <ListItem button onClick={() => setSelectedSection('form')}>
                            <ListItemIcon>
                                <AddBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Añadir Lectura" />
                        </ListItem>
                        <ListItem button onClick={() => setSelectedSection('history')}>
                            <ListItemIcon>
                                <HistoryIcon />
                            </ListItemIcon>
                            <ListItemText primary="Historial" />
                        </ListItem>
                        <ListItem button onClick={() => setSelectedSection('trends')}>
                            <ListItemIcon>
                                <TrendingUpIcon />
                            </ListItemIcon>
                            <ListItemText primary="Tendencias" />
                        </ListItem>
                        <ListItem button onClick={() => setSelectedSection('information')}>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="Información" />
                        </ListItem>
                        <ListItem button onClick={() => setSelectedSection('challenges')}>
                            <ListItemIcon>
                                <FitnessCenterIcon />
                            </ListItemIcon>
                            <ListItemText primary="Retos" />
                        </ListItem>
                    </List>
                </Paper>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                {selectedSection === 'form' && <BloodPressureForm />}
                {selectedSection === 'history' && <BloodPressureHistory />}
                {selectedSection === 'trends' && <BloodPressureChart />}
                {selectedSection === 'information' && <InformationSection />}
                {selectedSection === 'challenges' && <ChallengesSection />}
            </Box>
        </Box>
    );
}

export default Dashboard;
