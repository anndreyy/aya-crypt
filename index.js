/**
 * entry point for the application
 */


// // Instancia o express
// const express = require('./configs/express');
// require('dotenv').config();

// express.listen(process.env.PORT, () => {
//     console.log(`app listening on port ${process.env.PORT}!`);	
//     }
// );


const { App } = require("uWebSockets.js");
const { Server } = require("socket.io");

const app = new App();
const io = new Server();

io.attachApp(app);

io.on("connection", (socket) => {
  // ...
});

app.listen(3000, (token) => {
  if (!token) {
    console.warn("port already in use");
  }
});