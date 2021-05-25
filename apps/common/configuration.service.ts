/* eslint-disable prettier/prettier */
import * as dotenv from 'dotenv';
dotenv.config();

const ENV = [
  { key: 'SERVER_PORT',               type: 'number',   required: true,  default_value: 3000 },
  { key: 'SERVER_BASE_API',           type: 'string',   required: false, default_value: '/api' },
  { key: 'RABBITMQ_QUEUE',            type: 'string',   required: false, default_value: 'my-queue' },
  { key: 'RABBITMQ_URL',              type: 'string',   required: false, default_value: 'amqp://localhost:5672' },
  { key: 'RABBITMQ_QUEUE_DURABLE',    type: 'boolean',  required: false, default_value: true },
  { key: 'RABBITMQ_QUEUE_AUTODELETE', type: 'boolean',  required: false, default_value: true },
];

const CACHE = {};

function validate() {
  ENV.forEach((env, index) => {
    const { key, default_value, required, type } = env;
    let value: any = process.env[key];

    if (value === undefined && required) {
      throw new Error(`Envrionment variable "${key}" is not passed and is required value.`);
    }

    if (value === undefined) {
      value = default_value;
    }

    CACHE[key] = convertTo(type, value);
  });
  console.clear();
  console.log(JSON.stringify(CACHE, null, 4));
}

function convertTo(type: string, value: any) {
  switch(type) {
    case 'number'  : return Number(value);
    case 'string'  : return String(value);
    case 'boolean' : return Boolean(value);
  }
}

function getEnvironment(key: string) {
  return CACHE[key];
}

export { validate, getEnvironment };
