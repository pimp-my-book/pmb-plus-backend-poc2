import {hello, getAllBooks} from "./query";
import {addBook, addVendor} from "./mutation";
import {db} from '../../libs/db'
export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        connection: () => `${db}`,
        getAllBooks: (root, args, context) => getAllBooks(args,context)
    },
    Mutation : {
        addBook: (root, args, context) => addBook(args, context),
        addVendor: (root, {input:args}, context) => addVendor({input:args}, context)
    },
    Product: {
        __resolveType: parent => {
            return "Book"
        }
    }
}
