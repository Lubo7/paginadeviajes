const SuperController = require("./superController");
const travelsModels = require('../Models/travelsModels');

class travelController extends SuperController
{
  constructor(req, res, next)
  {
    super(req, res, next);
  }

  index(id){
    travelsModels.findById(id)
    .then((data)=>{
      this.res.render('travelDetail', {
        title:'detailTravels',
        travels:data
      });
    })
  }
}

module.exports = travelController;
