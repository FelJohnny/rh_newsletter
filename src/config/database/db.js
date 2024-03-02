require('dotenv/config.js')


const db = {
        database: process.env.DATABASE_DB,
        username: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        host: process.env.HOST_DB,
        port: process.env.PORT_DB,
        dialect: process.env.DIALECT_DB,

        
}

module.exports = db;