const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

// Create a new to-do
router.post('/', async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;

    if (!title || !dueDate) {
      return res.status(400).json({ message: 'Title and due date are required' });
    }

    const todo = new Todo({
      title,
      description,
      completed: false,
      dueDate,
    });

    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ message: 'Failed to create to-do' });
  }
});

// Retrieve all to-dos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    console.error('Error retrieving todos:', error);
    res.status(500).json({ message: 'Failed to retrieve to-dos' });
  }
});

// Retrieve a specific to-do by ID
router.get('/:id', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'To-do not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    console.error('Error retrieving todo:', error);
    res.status(500).json({ message: 'Failed to retrieve to-do' });
  }
});


router.put('/:id', async (req, res) => {
  try {
    const { title, description, completed, dueDate } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, description, completed, dueDate },
      { new: true, runValidators: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: 'To-do not found' });
    }

    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ message: 'Failed to update to-do' });
  }
});


router.patch('/:id/complete', async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'To-do not found' });
    }

    todo.completed = true;
    await todo.save();
    res.status(200).json({ message: 'To-do marked as complete', todo });
  } catch (error) {
    console.error('Error marking todo as complete:', error);
    res.status(500).json({ message: 'Failed to mark to-do as complete' });
  }
});

// Delete a specific to-do by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'To-do not found' });
    }
    res.status(200).json({ message: 'To-do item deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ message: 'Failed to delete to-do' });
  }
});

module.exports = router;
