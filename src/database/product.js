//This file has querys to create tables for the product api

exports.init = async (client) => {

    //vendor
     await client.query(`
     CREATE TABLE IF NOT EXISTS vendor
     (
         vendorId MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
         createdAt TIMESTAMP not null,
         vendorName varchar(100) not null,
         vendorDescription varchar(100),
         vendorWebsite varchar(100),
         vendorAddress varchar(100) not null,
         vendorEmail varchar(100) not null,
         PRIMARY KEY (vendorId)         
     );
     `)

    //inventory

    

   await client.query(`
     CREATE TABLE IF NOT EXISTS inventory
     (
        inventoryId MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
        FOREIGN KEY(productId) REFERENCES product(productId) ON UPDATE CASCADE ON DELETE RESTRICT,
        quantity int,
        sold int 

     )
   `);

    //products
    await client.query(`
    CREATE TABLE IF NOT EXISTS product
    (
        productId  MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
        productName varchar(250) not null,
        productDescription varchar(250) not null,
       
        

    )
    `)

    //books
    await client.query(`
    CREATE TABLE IF NOT EXISTS book
    (
        bookId MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
        bookAuthor varchar(100) not null,
        bookISBN varchar(100) not null,
        buyer varchar(250),
        dateSold DATETIME,
        bookGrade varchar(250) not null,
        dateUploaded DATETIME not null,
        price DECIMAL not null,
        FOREIGN KEY(productId) REFERENCES product(productId) ON UPDATE CASCADE ON DELETE RESTRICT,
        FOREIGN KEY(vendorId) REFERENCES product(vendorId) ON UPDATE CASCADE ON DELETE RESTRICT
    );
    `)


    //buyinglist
    await client.query(`
    (
        buyingListId MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
        createdOn DATETIME not null,
        FOREIGN KEY(bookId) REFERENCES product(bookId) ON UPDATE CASCADE ON DELETE RESTRICT,
        FOREIGN KEY(vendorId) REFERENCES product(vendorId) ON UPDATE CASCADE ON DELETE RESTRICT

    )
    `)

    
    //book buyinglist
}