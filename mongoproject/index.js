

// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Create Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Define a schema
const TodoSchema = new mongoose.Schema({
  title: String,
  completed: Boolean
});

// Define a model
const Todo = mongoose.model('Todo', TodoSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Routes

// Create a todo
app.post('/todos', async (req, res) => {
  try {
    const todo = new Todo(req.body);
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Read all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(todo);
  } catch (err) {
    res.status(404).json({ error: 'Todo not found' });
  }
});


// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (err) {
    res.status(404).json({ error: 'Todo not found' });
  }
});


// Start the server
const PORT = process.env.PORT || 3000;  // npm i dotenv
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

