import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, email, password };
        try {
            const response = await axios.post('http://localhost:8000/api/users/register/', user);
            console.log(response.data);
            navigate('/'); // Redirigir al login después del registro
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container
            component="main"
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url(/assets/imgs/bg2.jpeg)', // Cambia la ruta según tu archivo de fondo
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <Typography variant="h5" align="center">Registrarse</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Nombre de usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Registrarse
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={() => navigate('/')}
                    >
                        ¿Ya tienes una cuenta? Iniciar Sesión
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Register;
