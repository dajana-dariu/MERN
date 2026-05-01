const express = require('express');
const dotenv = require('dotenv').config();

const port = process.env.PORT || 8000;
const app = express();
app.get('/api/tasks', (req, res) => res.json({ message: 'Test direkt' }));
app.use('/api/tasks', require('./routes/taskRoutes'));

app.listen(port, () => console.log(`Server is listening on ${port}`));
