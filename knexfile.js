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
        migrations: {
            directory: __dirname + '/migrations',
          tableName: 'knex_migrations'
        },
        pool: {min:0, max: 10}

}