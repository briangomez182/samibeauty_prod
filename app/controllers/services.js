const data = require('../data/data');

module.exports = {
    detail: (req, res) => {
        let id = req.params.id;
        let service = data.listServices.filter(data => data.id == id);

        if (service.length > 0) {
            /* Trae algo */
            return res.render('detailTest', {service: service[0]});

        } else {
            /* No trae nada */
            let message = {
                subtitle: "Service not found",
                title: "I apologize for the inconvenience you experienced. We will do our best to resolve the issue"
                
            }
            return res.render('message-page', {message});

        }
    }
}

