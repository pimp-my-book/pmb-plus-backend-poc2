

var common = require('./aurora')
const Client = require('serverless-mysql')
const mysql = require('mysql')
export const addBook = async (args, context) => {
    
    
console.log(args.title)
var clientDev = Client({
    config: {
        host: 'marketplace.cluster-cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
        user: 'marketPlaceRoot',
        password: 'gX92Md0f8e0Lbr',
        database: 'test',
    }
})

var clientLocal = Client({
    config: {
        host: 'pmbpluspocrds.cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
        user: 'adminLocalPlus',
        password: '83uzbZ0ePuDDUi',
        database: 'pmbPlusDB',
    }
})
console.log(args.title)
console.log(client.config)


try{

    await client.connect()


    
    let con = client.getClient()
    console.log(con)
    console.log(args.title,args.author)
    let book = await client.query('INSERT INTO books (title,author) VALUES(?,?)', [args.title ,args.author ]);
    console.log(book)
    await client.end()
     
    return {
        title: args.title,
        author: args.author
        
    }
    

} catch(e){
    return e
}

}


/*n 34 narsing 3 parow north


console.log(args.title)
    var client = Client({
        config: {
            host: 'marketplace.cluster-cnzzwx7w7f5y.us-east-1.rds.amazonaws.com',
            user: 'marketPlaceRoot',
            password: 'gX92Md0f8e0Lbr',
            database: 'marketplace',
        }
    })

    console.log(args.title)
    console.log(client.config)

    
    await client.connect()

   
    await client.query(`
    CREATE TABLE IF NOT EXISTS books
    (
        id MEDIUMINT UNSIGNED not null AUTO_INCREMENT
        title varchar(100) not null
        author varchar(100) not null
        PRIMARY KEY (id)
    );
    `)

    let con = client.getClient()
    console.log(con)
    let book = await client.query('INSERT INTO books (title,author) VALUES(?,?)', [JSON.parse(args.title) ,JSON.parse(args.author) ]);
    await client.end()
     client.quit()
    return book
*/