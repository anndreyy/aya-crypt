const express = require('express')
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*'
}));
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

var route, routes = [];

app.use('/', require('../api/routes/'));

app.post('/login', (req, res, next) => {
    res.json({
        token: '123456'
    });
});

app._router.stack.forEach(function (middleware) {
    if (middleware.route) { // routes registered directly on the app
        routes.push(middleware.route);
    } else if (middleware.name === 'router') { // router middleware 
        middleware.handle.stack.forEach(function (handler) {
            route = handler.route;
            route && routes.push(route);
        });
    }
});

// Show routes
routes.map(route => {
    for (const method in route.methods) {
        console.log(method, route.path);
    }
})

module.exports = app;