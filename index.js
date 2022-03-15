/**
 * entry point for the application
 */


// Instancia o express
const express = require('./configs/express');
require('dotenv').config();

express.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}!`);	
    }
);