const express = require('express');
require('dotenv').config();
const DB = require('./connection/connectDB.js');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes.js');

DB();
// connected
app.use(cookieParser());
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})