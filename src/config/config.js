const {Sequelize} = require('sequelize')
const db = require('./database/db.js')

const sequelize = new Sequelize( db.database, db.username, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
})



module.exports = sequelize;