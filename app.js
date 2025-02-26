const express = require('express');
const winston = require('winston');
const LokiTransport = require('winston-loki');

const app = express();
const port = 3000;
app.use(express.json());

// Configure Winston logger with conditional Loki transport
const transports = [
  new winston.transports.Console({
    format: winston.format.simple(),
  }),
];

if (process.env.LOKI_URL) {
  transports.push(
    new LokiTransport({
      host: process.env.LOKI_URL,
      labels: { app: 'express-logging' },
      json: true,
      format: winston.format.json(),
    }),
  );
}

const logger = winston.createLogger({ transports });

const items = [];
const itemSet = new Set();

// POST /items
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) {
    logger.warn('POST /items - Missing name field');
    return res.status(400).json({ error: 'Name is required' });
  }
  if (itemSet.has(name)) {
    logger.error('POST /items - Item already exists', { name });
    return res.status(400).json({ error: 'Item already exists' });
  }
  items.push({ name });
  itemSet.add(name);

  logger.info('Item added', { name });
  res.status(201).json({ message: 'Item added', name });
});

// GET /items
app.get('/items', (req, res) => {
  logger.info('GET /items - Fetching all items', { count: items.length });
  res.json({ items: items.map(({ name }) => name) });
});

app.listen(port, () => {
  logger.info(`Server running on http://localhost:${port}`);
  console.log(`Server running on http://localhost:${port}`);
});
