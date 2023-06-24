var express = require('express');
var router = express.Router();
const mail = require('../controllers/mail');

router.get('/contact', mail.contact);

router.post('/contact', mail.contactPost);

router.get('/mail-send', mail.mailSend);


module.exports = router;
