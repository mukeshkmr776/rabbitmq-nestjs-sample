import * as dotenv from 'dotenv';
dotenv.config();

function getEnvironment(key: string) {
  return process.env[key];
}

export { getEnvironment };
