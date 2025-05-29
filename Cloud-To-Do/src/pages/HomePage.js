import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h2" gutterBottom>Cloud To-Do App</Typography>
      <Typography variant="h6" gutterBottom>
        Manage your tasks, collaborate, and stay productive.<br />
        <span style={{ color: "#1976d2" }}>Fast, Secure, Beautiful.</span>
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" size="large" component={Link} to="/login" sx={{ mr: 2 }}>
          Login
        </Button>
        <Button variant="outlined" color="primary" size="large" component={Link} to="/signup">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}

export default HomePage;
