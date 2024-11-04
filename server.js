// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Pusher = require('pusher');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Pusher configuration
const pusher = new Pusher({
  appId: '1890567',
  key: 'fcbb3283a93e7841f699',
  secret: '68aec0327efc5a581da6',
  cluster: 'eu',
  useTLS: true
});

// Simple in-memory user storage
const users = [];

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });
  res.status(201).send({ message: 'User registered' });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
  res.send({ token });
});

// Message endpoint
app.post('/message', (req, res) => {
  const { username, message } = req.body;
  const timestamp = new Date().toISOString();
  pusher.trigger('chat', 'message', {
    username,
    message,
    timestamp
  });
  res.send({ message: 'Message sent' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});