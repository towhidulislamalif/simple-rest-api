import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/index.js';

const app = express();
const PORT = config.port;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Database connection
const connectToDatabase = async () => {
  try {
    await mongoose.connect(config.mongodbURL);
    console.log('Database connection established');
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

// Start server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
  });
};

// Main function
const main = async () => {
  try {
    await connectToDatabase();
    startServer();
  } catch (error) {
    console.error('Error during startup:', error.message);
    // process.exit(1);
  }
};

// Run the application
main();
