const superController = require('./superController');
const travelsModel = require('../Models/travelsModels');
class indexController extends superController{
    constructor(req,res,next) {
        super(req, res, next);
    }


    index() {


        travelsModel.findAll({where:{visible:true}})
            .then((data) => {
                console.log(JSON.stringify(data));
                let userName = (this.req.session.username) ? this.req.session.username : null;
                this.res.render('index',
                    {
                        title: 'Travels',
                        travels: data,
                        user: userName
                    });
            })
    }

}

module.exports = indexController;
