const Sequelize = require('sequelize');

class SequelizeConf{
    static getConnection(){
        return new Sequelize(process.env.MYSQL.DATABASE, process.env.MYSQL.USER, process.env.MYSQL.PASSWORD,{
            host: process.env.MYSQL.IP,
            dialect:'mysql',
            pool:{
                max: 5,
                min: 0,
                idle: 10000
            }
        })
    }
}

module.exports = SequelizeConf;
