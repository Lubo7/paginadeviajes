const superController = require('./superController');
const User = require("../Models/userModels");


class userController extends superController
{
    constructor(req, res ,next){
        super(req, res, next);
    }

    index(){
        let error = null;
        if(this.req.flash('userNotExist')){
            error = 'El usuario no existe'
        }
        this.res.render('login',
            {
                title: 'Travels',
                error: error,
                user: null
            });
    }

    login(){


        User.findOne({where:{email:this.req.body.email}})
            .then((resultado)=>{
                if(!resultado){
                    this.req.flash('userNotExist');
                    return this.res.redirect('/login');
                }
                if(this.req.body.pass === resultado.password){
                    this.req.session.username=resultado.username;
                    this.res.redirect('/');
                }else{
                    this.req.flash('passIsIncorrect');
                    this.res.redirect('/login');
                }

            })
    }
        /*if ((this.req.body.email ==="xavi@geekshubs.com") &&
            (this.req.body.pass==="123")){
            this.res.redirect("/");
        }else
        {
            this.res.redirect("/login");
        }*/

}

module.exports= userController;