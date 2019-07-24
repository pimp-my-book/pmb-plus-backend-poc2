//This file has querys to create tables for the product api

exports.init = async (client) => {

    //vendor
     await client.query(`
     CREATE TABLE IF NOT EXISTS vendors
     (
         vendorId MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
         created DATETIME DEFAULT,
         vendorName varchar(100) not null,
         vendorDescription varchar(100),
         vendorWebsite varchar(100),
         vendorAddress varchar(100) not null,
         vendorEmail varchar(100) not null,
         PRIMARY KEY (vendorId)
     )
     `);

    //inventory

   await client.query(`
     CREATE TABLE IF NOT EXISTS inventory
     (
        inventoryId MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
        quantity int,
        sold int, 

     )
   `);

    //products
    await client.query(`
    CREATE TABLE IF NOT EXISTS product
    (
        productId  MEDIUMINT UNSIGNED not null AUTO_INCREMENT primary key,
        productName varchar(250) not null,
        productDescription varchar(250) not null,
        dateUploaded DATETIME not null,
        price DECIMAL not null,
        

    )
    `)

    //books
    await client.query(`
    CREATE TABLE IF NOT EXISTS book
    (
        bookId MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
        title varchar(100) not null,
        author varchar(100) not null,
        PRIMARY KEY (id)
    );
    `)


    //buyinglist


    //book buyinglist
}