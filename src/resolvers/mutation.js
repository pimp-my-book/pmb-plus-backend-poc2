const connection = require('../../knexfile')
const knex = require('knex')


export const addBook = (args, context) => {
    knex('Books')
    .insert({title: args.title, author: args.author})
    .then(book => {
        console.log(book)
        return {
            title: book.title
        }
    })
}
