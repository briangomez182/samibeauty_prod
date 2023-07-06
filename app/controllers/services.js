
module.exports = {
    detail: (req, res) => {
        let id = req.params.id;

        const data = req.session.langES == undefined ? require('../data/data') : require('../data/data-ES') ;

        let service = data.listServices.filter(data => data.id == id);

        if (service.length > 0) {
            /* Trae algo */

            if (req.session.langES == undefined) {
                /* Esta en ingles */
                return res.render('detailService', {service: service[0]});
            } else {
                /* Esta em español */
                return res.render('detailService-ES', {service: service[0]});
            }



        } else {
            
            if (req.session.langES == undefined) {
                /* Esta en ingles */
                let message = {
                    subtitle: "Service not found",
                    title: "I apologize for the inconvenience you experienced. We will do our best to resolve the issue"
                    
                }
                return res.render('message-page', {message});
            } else {
                /* Esta em español */
                let message = {
                    subtitle: "Servicio no encontrado",
                    title: "Le pedimos disculpas por las molestias que experimentó. Haremos nuestro mejor esfuerzo para resolver el problema"
                    
                }
                return res.render('message-page', {message});
            }
        }
    }
}

