const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/simple-notes-app', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Note Schema
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Note = mongoose.model('Note', noteSchema);

// API Endpoints

// Create Note
app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title,
    content,
  });
  await newNote.save();
  res.json(newNote);
});

// Read Notes
app.get('/api/notes', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
