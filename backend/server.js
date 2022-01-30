const express = require('express');
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.get('/', (req, res) => {
    //console.log('hello from server');
    res.send('Api running');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));