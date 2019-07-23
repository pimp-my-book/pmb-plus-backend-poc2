import {hello} from "./query";
import {addBook} from "./mutation";
import {db} from '../../libs/db'
export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context),
        connection: () => `${db}`
    },
    Mutation : {
        addBook: (root, args, context) => addBook(args, context)

    }
}
