var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

router.get('/professor', (req, res, next) => {
    res.render('professor/professor_0100');
});

router.get('/hello', (req, res, next) => {
    res.send("Hello?")
})

module.exports = router;