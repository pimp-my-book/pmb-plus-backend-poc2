//Kenx file
const mysql = require('mysql')

module.exports = {
   
        client: 'mysql',
        connection: {
            host: process.env.db_host,
            user: process.env.db_user,
            password: process.env.db_password,
            database: process.env.db_name,
        },
        pool: {min:0, max: 10}

}