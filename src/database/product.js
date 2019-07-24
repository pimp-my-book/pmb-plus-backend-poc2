//This file has querys to create tables for the product api

exports.init = async (client) => {

    //vendor
     await client.query(`
     CREATE TABLE IF NOT EXISTS vendors
     (
         id MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
         created DATETIME DEFAULT,
         vendorName varchar(100) not null,
         vendorDescription varchar(100),
         vendorWebsite varchar(100),
         vendorAddress varchar(100) not null,
         vendorEmail varchar(100) not null,
         PRIMARY KEY (id)
     )
     `);
    //inventory



    //products

    //books
    await client.query(`
    CREATE TABLE IF NOT EXISTS books
    (
        id MEDIUMINT UNSIGNED not null AUTO_INCREMENT,
        title varchar(100) not null,
        author varchar(100) not null,
        PRIMARY KEY (id)
    );
    `)


    //buyinglist


    //book buyinglist
}