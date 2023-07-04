const sendEmail = require('../email/index');
const data = require('../data/data');

module.exports = {
    home: (req, res) => {
        let servicesExtensions = data.listServices.filter(data => data.typeService == 'Extensions Service');
        let servicesEyebrows = data.listServices.filter(data => data.typeService == 'Eyebrows Service');
        return res.render('index',{servicesExtensions, servicesEyebrows})
    },
    about: (req, res) => {
        let gallery = ['people-2.jpg', 'people-6-XL.JPG', 'banner.JPG']
        return res.render('about-me', {gallery})
    }
}

