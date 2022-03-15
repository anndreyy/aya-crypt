const express = require('express')
const app = express()
const port = 3000

var route, routes = [];

app.use('/', require('../api/routes/'));

app._router.stack.forEach(function(middleware){
    if(middleware.route){ // routes registered directly on the app
        routes.push(middleware.route);
    } else if(middleware.name === 'router'){ // router middleware 
        middleware.handle.stack.forEach(function(handler){
            route = handler.route;
            route && routes.push(route);
        });
    }
});

console.log(routes)

module.exports = app;