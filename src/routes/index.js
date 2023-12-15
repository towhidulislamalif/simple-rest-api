import express from 'express';

const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  // Handle the GET request for the / endpoint
  res.send('Response for GET /');
});

// Export the router to use in other files
export default router;
