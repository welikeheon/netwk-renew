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

router.get('/getpaper', (req, res, next) => {
    var options = {
        'uri': 'http://netwk.hannam.ac.kr/hak-non.html',
        'encoding': 'binary'
    }

    request(options, (rror, response, body) => {
        var result = iconv.decode(body, 'utf-8');
        let $ = cheerio.load(result);

    })
});

router.get('/e-campus', (req, res, next) => {
    res.render('e-campus/e-campus_0100');
})

router.get('/hello', (req, res, next) => {
    res.send("Hello?")
})

module.exports = router;