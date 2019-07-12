const mysql = require('mysql')

module.exports = {
    dev: {
        client: 'mysql',
        connection: {
            host: process.env.db_url,
            user: process.env.db_user,
            password: process.env.db_password,
            database: process.env.db_name,
        }
    }
}