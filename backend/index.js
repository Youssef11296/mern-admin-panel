const express = require ('express');
const {connectDB} = require ('./config/db');
const cors = require ('cors');
require ('dotenv').config ();

// Connect DB
connectDB ();

// Server init
const app = express ();

// Server middlewares
app.use (express.json ());
app.use (cors ());

app.use ('/api/categories', require ('./routes/categoriesRoute'));

// Server config
const PORT = process.env.PORT || 5000;
app.listen (PORT, () => console.log (`Server is ON port: ${PORT}`));
