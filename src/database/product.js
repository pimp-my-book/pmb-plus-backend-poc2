//This file has querys to create tables for the product api

exports.init = async (client) => {
    await client.query(`
    CREATE TABLE IF NOT EXISTS books
    (
        id MEDIUMINT UNSIGNED not null AUTO_INCREMENT
        title varchar(100) not null
        author varchar(100) not null
        PRIMARY KEY (id)
    );
    `)
}