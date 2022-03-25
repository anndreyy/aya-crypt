var express = require('express');
var router = express.Router();

const Masterly = require("../controllers/masterly");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Endpoint to aya-crypt');
});
// Rotas para retornar os dados do usuário
router.get('/masterly', Masterly);

module.exports = router;