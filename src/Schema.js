const schema = `

type Book {
    ID: String!
    title: String!
    author: String!
}

"""
A hello world Query
"""
type Query {
     hello: String!
}


type Mutation {
    addBook( ID: String!,
        title: String!,
        author: String!): Book
}
`

export {schema}