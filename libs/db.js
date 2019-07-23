const Client = require('serverless-mysql')


exports.db = () =>{
   const  clientDev= Client({
        config: {
            host: 'marketplace.cluster-cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
            user: 'marketPlaceRoot',
            password: 'gX92Md0f8e0Lbr',
            database: 'test',
        }
    })
    
  const clientLocal= Client({
        config: {
            host: 'pmbpluspocrds.cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
            user: 'adminLocalPlus',
            password: '83uzbZ0ePuDDUi',
            database: 'pmbPlusDB',
        }
    })

    
    
   const  databaseConnection = process.env.NODE_ENV === 'production' ? clientDev : clientLocal
  return databaseConnection
}