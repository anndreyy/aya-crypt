/**
 * entry point for the application
 */


require('dotenv').config();

const express = require('./configs/express');
const socket = require('./configs/socket');

const server = express.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}!`);	
    }
);

socket(server);
