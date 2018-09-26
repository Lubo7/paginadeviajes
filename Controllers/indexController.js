const superController = require('./superController');
const travelModel = require('../Models/travelsModels');
class indexController extends superController {
    constructor(req, res, next) {
        super(req, res, next);
        travelModel.findAll()
            .then((data) => {
                console.log(JSON.stringify(data))
            })
    };

    index() {
        this.res.render('index', {title: 'Express'});
    }


    index(data) {
        this.res.render('index', {title: 'Express', travels: data});
    }
}
module.exports = indexController;

