import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';

function ResetPasswordPage() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleReset = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', { token, password });
      setMsg('Password reset! You can now log in.');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      setMsg(err.response?.data?.msg || 'Reset failed');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>Reset Password</Typography>
      {msg && <Alert severity={msg.includes('reset!') ? 'success' : 'error'}>{msg}</Alert>}
      <Box component="form" onSubmit={handleReset} sx={{ mt: 2 }}>
        <TextField label="New Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Reset</Button>
      </Box>
    </Container>
  );
}

export default ResetPasswordPage;
