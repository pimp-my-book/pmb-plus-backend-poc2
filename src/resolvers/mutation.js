

var common = require('../database/aurora')
import db from '../../libs/db'

export const addBook = async (args, context) => {
    
    
console.log(args.title)

console.log(db)

try{

    await db.connect()

    await db.query(`
    CREATE TABLE IF NOT EXISTS books
    (
        id MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
        title varchar(100) not null,
        author varchar(100) not null,
        PRIMARY KEY (id)
    );
    `)

    
    let con = db.getClient()
   
    let book = await db.query('INSERT INTO books (title,author) VALUES(?,?)', [args.title ,args.author ]);
   
    await db.end()
      
    return {
        title: args.title,
        author: args.author
        
    }
    

} catch(e){
    return e
}

}

export default addVendor = async ({input: args}, context) => {

    await common.init(db)

    const addVendorinput = {
    vendorName: args.vendorName,

    vendorDescription: args.vendorDescription,

    vendorWebsite: args.vendorWebsite,
        vendorAddress: args.vendorAddress,

    vendorEmail: args.vendorEmail,

    }
    let vendor = await db.query('', [addVendorinput])
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