const sendEmail = require('../email/index');

module.exports = {
    home: (req, res) => {
        return res.render('index')
    },
    about: (req, res) => {
        let gallery = ['people-2.jpg', 'people-6-XL.jpg', 'banner.jpg']
        return res.render('about-me', {gallery})
    }
}

