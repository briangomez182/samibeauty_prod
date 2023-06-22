var express = require('express');
var router = express.Router();
const index = require('../controllers/index');

/* GET home page. */
router.get('/', index.home);

router.get('/contact', index.contact);

router.post('/contact', index.contactPost);

module.exports = router;
