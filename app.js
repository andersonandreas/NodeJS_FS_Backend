const express = require('express');
const cors = require('cors');
const app = express();

// use middleware to form our contract for incoming json payloads only,
app.use(express.json());

// use middleLevare for url encoding
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Service is up' });
});

module.exports = app;
