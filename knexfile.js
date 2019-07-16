//Kenx file
const mysql = require('mysql')

module.exports = {
   
        client: 'mysql',
        connection: {
            host: 'marketplace.cluster-cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
            user: 'marketPlaceRoot',
            password: 'gX92Md0f8e0Lbr',
            database: 'marketplace',
            
        },
        migrations: {
            directory: __dirname + '/migrations',
          tableName: 'knex_migrations'
        },
        pool:{min:1, max: 64},
        acquireConnectionTimeout: 1000000,
        debug: true

        

}

console.log({host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_name,})