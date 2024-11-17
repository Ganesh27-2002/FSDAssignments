const express = require('express');
const mongoose = require('mongoose');
const todosRouter = require('./routes/todos');
const path = require('path');
const app = express();
const PORT = 3000;


app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


app.use('/todos', todosRouter);

// MongoDB connection
const MONGO_URI = 'mongodb+srv://ganeshvaddepelli16:rzFWHVmao90Zjsgz@cluster0.u3igg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.error('Error connecting to MongoDB:', error));
