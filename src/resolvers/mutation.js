const connection = require('../../knexfile')
const knex = require('knex')


export const addBook = (args, context) => {
    knex('books')
    .insert({title: args.title, author: args.author})
    .then(book => {
        return book
    })
}
