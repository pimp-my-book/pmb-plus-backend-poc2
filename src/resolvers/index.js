import {hello} from "./query";
import {addBook} from "./mutation";

export const resolvers = {
    Query: {
        hello: (root, args, context) => hello(args, context)
    },
    Mutation : {
        addBook: (root, args, context) => addBook(args, context)

    }
}
