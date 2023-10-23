const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cors());
app.use(cookieParser());

// Set the port you want to use
const PORT = process.env.PORT || 3005;
// for local
// mongodb://0.0.0.0:27017/taskmanager

// for cloud
// mongodb+srv://nileshp:Nileshhh@cluster0.cwmozw9.mongodb.net/Cluster0?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://nileshp:Nileshhh@cluster0.cwmozw9.mongodb.net/Cluster0?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
