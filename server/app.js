// import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
// app
const app = express();

// db
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// middleware
app.use(express.json());
app.use(express.urlencoded());

// routes
app.use(require("./routes"))


// port
const PORT = process.env.PORT || 8080;

// listener
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Server is running on http://localhost:${PORT}`);
});