const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user.route');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(express.json());
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('User Service MongoDB connected');
  app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
})
.catch(err => console.error('MongoDB error:', err));