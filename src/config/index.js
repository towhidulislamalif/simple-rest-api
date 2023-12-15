import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

const config = {
  port: process.env.PORT,
  mongodbURL: process.env.MONGODB_URL,
};

// Export configuration object
export default config;
