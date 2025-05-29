import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Button, Grid, Card, CardContent, CardActions, Chip, Checkbox, IconButton, TextField, Select, MenuItem, Tooltip } from '@mui/material';
import { Add, Delete, Group, Notifications, Palette } from '@mui/icons-material';
import axios from 'axios';

function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [msg, setMsg] = useState('');

  const fetchTasks = async () => {
    const token = localStorage.getItem('token');
    const res = await axios.get('http://localhost:5000/api/tasks', { headers: { Authorization: `Bearer ${token}` } });
    setTasks(res.data);
  };

  useEffect(() => { fetchTasks(); }, []);

  const addTask = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/api/tasks', { title, priority, category, description }, { headers: { Authorization: `Bearer ${token}` } });
    setTitle(''); setPriority('Low'); setCategory(''); setDescription('');
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    const token = localStorage.getItem('token');
    await axios.put(`http://localhost:5000/api/tasks/${task._id}/complete`, {}, { headers: { Authorization: `Bearer ${token}` } });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    fetchTasks();
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>Your Tasks</Typography>
      <Box component="form" onSubmit={addTask} sx={{ display: 'flex', gap: 2, mb: 4 }}>
        <TextField label="Task" value={title} onChange={e => setTitle(e.target.value)} required />
        <TextField label="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <Select value={priority} onChange={e => setPriority(e.target.value)}>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>
        <TextField label="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <Button type="submit" variant="contained" color="primary" startIcon={<Add />}>Add</Button>
      </Box>
      <Grid container spacing={2}>
        {tasks.map(task => (
          <Grid item xs={12} md={6} key={task._id}>
            <Card variant={task.completed ? "outlined" : "elevation"} sx={{ backgroundColor: task.completed ? "#e0e0e0" : "#fff" }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Checkbox checked={task.completed} onChange={() => toggleComplete(task)} />
                  <Typography variant="h6" sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</Typography>
                  <Chip label={task.priority} color={task.priority === 'High' ? "error" : (task.priority === 'Medium' ? "warning" : "default")} sx={{ ml: 2 }} />
                </Box>
                <Typography variant="body2">{task.description}</Typography>
                <Typography variant="caption" color="text.secondary">{task.category}</Typography>
              </CardContent>
              <CardActions>
                <Tooltip title="Share (collaboration)">
                  <IconButton color="primary"><Group /></IconButton>
                </Tooltip>
                <Tooltip title="Set Reminder">
                  <IconButton color="secondary"><Notifications /></IconButton>
                </Tooltip>
                <Tooltip title="Theme">
                  <IconButton color="secondary"><Palette /></IconButton>
                </Tooltip>
                <IconButton color="error" onClick={() => deleteTask(task._id)}><Delete /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default TasksPage;
