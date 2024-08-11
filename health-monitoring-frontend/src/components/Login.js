import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, TextField, Button, Typography, Paper, Box } from '@mui/material';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        try {
            const response = await axios.post('http://localhost:8000/api/users/login/', user);
            console.log(response.data);
            localStorage.setItem('access', response.data.access);
            localStorage.setItem('refresh', response.data.refresh);
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/register');
    };

    return (
        <Container
            component="main"
            sx={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: 'url(/assets/imgs/bg1.jpeg)', // Asegúrate de que la ruta sea correcta
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <Paper elevation={3} sx={{ padding: 4, width: '100%', maxWidth: 400, backgroundColor: 'rgba(255, 255, 255, 0.95)' }}>
                <Typography variant="h5" align="center">Iniciar Sesión</Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Correo Electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        autoFocus
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
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Iniciar Sesión
                    </Button>
                    <Button
                        fullWidth
                        variant="outlined"
                        color="primary"
                        onClick={handleRegisterRedirect}
                    >
                        Registrarse
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}

export default Login;
