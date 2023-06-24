const sendEmail = require('../email/index');

module.exports = {
    home: (req, res) => {
        return res.render('index')
    }
}

