const Sequelize = require('sequelize') ;

const sequelize = new Sequelize('cllmanagement' , 'root' , '' , {
    dialect : 'mysql',
    host : 'localhost'
}) ;

module.exports = sequelize ;