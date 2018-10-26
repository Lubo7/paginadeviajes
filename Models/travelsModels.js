const Sequelize = require('sequelize');
const Connect = require('../Config/sequelizeConf').getConnection();

const Travel = Connect.define('travels',{
    name: {
        type: Sequelize.STRING(45)
    },
    text:{
        type: Sequelize.STRING(45)
    },
    price:{
        type: Sequelize.INTEGER
    },
    img:{
        type: Sequelize.STRING(225)
    },
    visible:{
        type: Sequelize.BOOLEAN

    }
});

module.exports= Travel;
