

var common = require('../database/product')
import db from '../../libs/db'

export const addBook = async ({input: args}, context) => {
    
await common.init(db)

try {
    const addBookInput ={
        productName: args.productName,
        productDescription: args.productDescription,
        
        price: args.price,
        vendor: args.vendor,
        image: args.image,
        bookEdition: args.bookEdition,
        title: args.productName,
        author: args.author,
        ISBN: args.ISBN,
        grade: args.grade
    }

   let book = await db.query(`INSERT INTO book (bookAuthor, bookISBN , buyer,bookGrade, productId, vendorId, bookTitle, price, bookEdition) VALUES(?,?,?,?,?,?,?,?,?)`, [
       addBookInput.author,
       addBookInput.ISBN,
       "Tahmir Hassish",
       addBookInput.grade,
       1,
       addBookInput.vendor,
       addBookInput.productName,
       addBookInput.price,
       addBookInput.bookEdition
   ])

   await db.end()

   return {
    productName: args.productName,
    productDescription: args.productDescription,
    
    price: args.price,
    vendor: args.vendor,
    image: args.image,
    
    title: args.title,
    author: args.author,
    ISBN: args.ISBN,
    grade: args.grade
   }
} catch (e){
    return e
}

}

export const addVendor = async ({input: args}, context) => {

    await common.init(db)

    try{
        const addVendorinput = {
            vendorName: args.vendorName,
        
            vendorDescription: args.vendorDescription,
        
            vendorWebsite: args.vendorWebsite,
                vendorAddress: args.vendorAddress,
        
            vendorEmail: args.vendorEmail,
        
            }
            console.log(addVendorinput)
            let vendor = await db.query('INSERT INTO vendor (vendorName,vendorDescription,vendorWebsite,vendorAddress,vendorEmail) VALUES(?, ?, ?, ?, ?)', [addVendorinput.vendorName, addVendorinput.vendorDescription, addVendorinput.vendorWebsite, addVendorinput.vendorAddress, addVendorinput.vendorEmail])
   
            await db.end()
    return {
        vendorName: args.vendorName,
        vendorAddress: args.vendorAddress,
        vendorEmail: args.vendorEmail,
        vendorDescription: args.vendorDescription,
        vendorWebsite: args.vendorWebsite

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