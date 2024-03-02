const {Sequelize} = require('sequelize')

const db = {
    database: process.env.DATABASE_DB,
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    host: process.env.HOST_DB,
    port: process.env.PORT_DB,
    dialect: process.env.DIALECT_DB,

}

const sequelize = new Sequelize( db.database, db.username, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
})

module.exports = sequelize;