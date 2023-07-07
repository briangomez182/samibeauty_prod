const sendEmail = require('../email/index');

module.exports = {
    home: (req, res) => {

        const data = req.session.langES == undefined ? require('../data/data') : require('../data/data-ES') ;

        let servicesExtensions  = data.listServices.filter(data => data.numService == 1);
        let servicesEyebrows    = data.listServices.filter(data => data.numService == 2);

        if (req.session.langES == undefined) {
            /* Esta en ingles */
            return res.render('index',{servicesExtensions, servicesEyebrows})
        } else {
            /* Esta em español */
            return res.render('index-ES',{servicesExtensions, servicesEyebrows})
        }
       
    },
    about: (req, res) => {
        let gallery = ['people-2.jpg', 'people-6-XL.JPG', 'banner.JPG']

        if (req.session.langES == undefined) {
            /* Esta en ingles */
            return res.render('about-me', {gallery})
        } else {
            /* Esta em español */
            return res.render('about-me-ES', {gallery})
        }

        
    },
    lang: (req, res) => {

        if (req.cookies.langES == 'ES') {
            res.clearCookie('langES');
            req.session.langES = undefined;
        } else {
            res.cookie('langES', 'ES', {maxAge: 1000 * 60 * 20})
            if (req.session.langES == undefined) {
                req.session.langES = true;
    
            } else {
                req.session.langES = undefined;
            }
        }  
        
        let path = req.query.path;
        return res.redirect(path);
    }
}

