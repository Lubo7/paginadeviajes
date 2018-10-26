var express = require('express');
var router = express.Router();

const Path = require('path');
const HBS = require('nodemailer-express-handlebars');
const Email = require ('../Config/emailConf');
let indexController = require ('../Controllers/indexController');
let travelController = require('../Controllers/travelController');
let UserController = require('../Controllers/userController');

/* GET home page. */
router.get('/', (req, res, next)=> {
   let index = new indexController(req,res,next);
   index.index();


});

router.get('/travels/:id',(req, res ,next)=>{
  let id = req.params.id;
  let travelDetail = new travelController(req, res, next);
  travelDetail.index(id);
});

router.get('/login',(req, res,next)=>{
    console.log("Entra en login");
    let userController = new UserController(req, res ,next);
    userController.index();

});

router.get('/email/send', (req, res) => {
  let message = {
    to: 'ivan@geekshubsacademy.com',
    subject: 'Email de prueba',
    html: "Hola es una prueba, Lubo7",
    attachments: [
      {
        filename: 'miarchivoLubo.html',
        path: `${__dirname}/miarchivoLubo.html`,
      },
      {
        filename: 'text.html',
        content: '<h1>Hello World, Ivan!</h1>'
      }
    ]
  }
  Email.transporter.sendMail(message, (error, info) => {
    if(error){
      return res.status(500).send(error);
    } else {
      Email.transporter.close();
      res.status(200).send('Respuesta' + info.response);
    }
  });
});

router.get('/email/send/hbs', (req, res) => {
  Email.transporter.use('compile', HBS({
    viewEngine: 'hbs',
    extName: '.hbs',
    viewPath: Path.join(__dirname, '../views/email-templates')
  }));




  let message = {
    to: 'ivan@geekshubsacademy.com',
    subject: "Email de prueba 2",
    template: 'email',
    context: {
      title: 'Prueba HBS',
      text: "Texto de prueba"
    }
  }

  Email.transporter.sendMail(message, (error, info) => {
    if(error){
      return res.status(500).send(error);
    } else {
      Email.transporter.close();
      res.status(200).send('Respuesta' + info.response);
    }
  });


})

// router.get('/email/send/hbs', (req, res) => {
//   // Email.transporter.use('compile', HBS({
//   //   viewEngine: 'hbs',
//   //   extName: '.hbs',
//   //   viewPath: Path.join(__dirname, '../views/email-templates')
//   // }));
//   //
//   // let message = {
//   //     to: 'ivan@geekshubsacademy.com',
//   //     subject: 'Email de prueba',
//   //     template: 'email',
//   //     context: {
//   //       title: 'Prueba HBS de Lubo',
//   //       text: "Texto de prueba Lubo"
//   //     }
//   // }
//
//   Email.transporter.use('compile', HBS({
//     viewEngine: 'hbs',
//     extName: '.hbs',
//     viewPath: Path.join(__dirname, '../views/email-templates')
//   }));
//
//   let message = {
//     to: 'ivan@geekshubsacademy.com',
//     subject: "Email de prueba 2",
//     template: 'email',
//     context: {
//       title: 'Prueba HBS',
//       text: "Texto de prueba"
//     }
//   }
//
//   Email.transporter.sendMail(message, (error, info) => {
//     if(error){
//       return res.status(500).send(error);
//     } else {
//       Email.transporter.close();
//       res.status(200).send('Respuesta' + info.response);
//     }
//   });
// })

module.exports = router;
