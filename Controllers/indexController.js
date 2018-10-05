const superController = require('./superController');
const travelsModel = require('../Models/travelsModels');
class indexController extends superController{
    constructor(req,res,next){
        super(req, res, next);
        travelsModel.findOne()
            .then((data)=>{
                this.index(data);
            })
    };

    index(){
        this.res.render('index',{title: 'Express'});
    }

    index(data){
        console.log(JSON.stringify(data));
        this.res.render('index',{title: 'Express', travels: data});
    }
}

module.exports = indexController;
