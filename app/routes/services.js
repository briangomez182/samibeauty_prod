var express = require('express');
var router = express.Router();
const services = require('../controllers/services');

/* GET home page. */
router.get('/', services.detail);

module.exports = router;
