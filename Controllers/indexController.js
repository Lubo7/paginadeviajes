const superController = require('./superController');
const travelsModel = require('../Models/travelsModels');
class indexController extends superController{
    constructor(req,res,next){
        super(req, res, next);
    };

    index(){
      travelsModel.findAll({where:{visible:true}})
          .then((data)=>{
          this.res.render('index',{title: 'Express', travels: data});
          })
    }
}

module.exports = indexController;
