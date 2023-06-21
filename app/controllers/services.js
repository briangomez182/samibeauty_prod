const data = require('../data/data');

module.exports = {
    detail: (req, res) => {
        let id = req.params.id;
        let result = data.listServices.filter(data => data.id == id);
        return res.render('detail', {service : result});
    }
}

