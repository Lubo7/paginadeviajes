const SEQUELIZE = require('sequelize');
const Connect = require('../Config/sequelizeConf').getConnection();

const User = Connect.define('users',{
    username:{
        type: SEQUELIZE.STRING
    },
    email:{
        type: SEQUELIZE.STRING
    },
    password:{
        type:SEQUELIZE.STRING
    },
    active:{
        type:SEQUELIZE.BOOLEAN
    },
    isAdmin:{
        type:SEQUELIZE.BOOLEAN
    }
})

module.exports = User;