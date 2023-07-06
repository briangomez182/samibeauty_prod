var express = require('express');
var router = express.Router();
const index = require('../controllers/index');

/* GET home page. */
router.get('/', index.home);

/* GET about me page. */
router.get('/about-me', index.about);

/* GET change leng. */
router.get('/change-lang', index.lang);


module.exports = router;
