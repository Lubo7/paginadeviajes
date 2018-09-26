const Sequelize = require('sequelize');
const Connect = require('../Confiq/sequelizeConf').getConnection();

const Travel = connect.define('travels',{
    name: {
        type: Sequelize.STRING(45)
    },
    text: {
        type: Sequelize.STRING(45)
    },
    price:{
        type: Sequelize.MAX_SAFE_INTEGER
    },
    img:{
        type: Sequelize.STRING(250)
    }
})

module.exports=Travel;