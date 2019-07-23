const Client = require('serverless-mysql')


module.exports = {
     clientDev: Client({
        config: {
            host: 'marketplace.cluster-cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
            user: 'marketPlaceRoot',
            password: 'gX92Md0f8e0Lbr',
            database: 'test',
        }
    }),
    
     clientLocal: Client({
        config: {
            host: 'pmbpluspocrds.cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
            user: 'adminLocalPlus',
            password: '83uzbZ0ePuDDUi',
            database: 'pmbPlusDB',
        }
    }),

    
    
     databaseConnection = process.env.NODE_ENV === 'production' ? clientDev : clientLocal
}