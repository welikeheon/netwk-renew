var express = require('express');
var router = express.Router();

var request = require('request')
var cheerio = require('cheerio')
var iconv = require('iconv-lite')

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

router.get('/professor/research-paper', (req, res, next) => {
    res.render('professor/professor_0200');
});

router.get('/professor/books', (req, res, next) => {
    res.render('professor/professor_0300');
});

router.get('/e-campus', (req, res, next) => {
    res.render('e-campus/e-campus_0100');
})

router.get('/hello', (req, res, next) => {
    res.send("Hello?")
})

module.exports = router;