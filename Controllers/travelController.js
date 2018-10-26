
const SuperController = require('./superController');
const TravelsModels  = require('../Models/travelsModels');

class travelController extends SuperController
{
   constructor(req, res ,next)
   {
       super(req, res ,next);
   }

   index(id){
       TravelsModels.findById(id)
           .then((data)=>{

               this.res.render('travelDetail',{
                   title: 'Travels',
                   travels: data
               });
           })


   }


}
module.exports=travelController;
