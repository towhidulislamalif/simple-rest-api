import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  mongodbURL: process.env.MONGODB_URL,
};

// Export configuration object
export default config;
