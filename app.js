const express = require('express');
const cors = require('cors');
const errorHandler = require('./middlewares/ErrorHandlerMiddleware');
require('dotenv').config({path: __dirname + './process.env'});

const PORT = process.env.PORT || 4004;

const app = express();
app.use(cors());
app.use(express.json({extended: true}));

//  Defines routes.
app.use('/api/request', require('./routes/request'));

//  Handles errors or exceptions.
app.use(errorHandler);

//  Starts app.
app.listen(PORT, () => {
  console.log(`Server working using port ${PORT}...`);
});