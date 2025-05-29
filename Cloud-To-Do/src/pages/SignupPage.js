import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleSignup = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/auth/signup', { email, password, name });
      navigate('/login');
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Signup failed');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>Sign Up</Typography>
      {msg && <Alert severity="error">{msg}</Alert>}
      <Box component="form" onSubmit={handleSignup} sx={{ mt: 2 }}>
        <TextField label="Name" fullWidth margin="normal" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
      </Box>
    </Container>
  );
}

export default SignupPage;
