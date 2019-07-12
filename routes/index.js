var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/Professor', (req, res, next) => {
    res.render('professor/professor_0100');
});

module.exports = router;