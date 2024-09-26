const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// In-memory activities array
const activities = [];

// Route to get all activities
app.get('/api/activities', (req, res) => {
  res.json(activities);
});

// Route to add a new activity
app.post('/api/activities', (req, res) => {
  const newActivity = req.body;
  activities.push(newActivity);
  res.status(201).json(newActivity);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
