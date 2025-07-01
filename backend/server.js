const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();

// Middlewares
app.use(cors());
app.options('*', cors()); // <-- ADD THIS
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
