const schema = `


"""
Buying List Type
"""
type BuyingList {
    ID: Int!
    store: String!
    books:[BookList]!
}

"""
Vendor Type
"""
type Vendor {
    ID: Int!
    vendorName: String!
    vendorDescription: String!
    vendorWebsite: String
    vendorAddress: String!
    vendorEmail: String!
    inventory: [Product]!
    buyingList: [BuyingList]!
}
"""
Product interface
"""
interface Product {
    ID: Int!
    productName: String!
    productDescription: String!
    dateUploaded: String!
    price: String!
    productType: String!
    vendor: String!
    image: String!
    
}
"""
A book type that is an extension of a product
"""
type Book implements Product {
    ID: Int!
    productName: String!
    productDescription: String!
    dateUploaded: String!
    price: String!
    vendor: String!
    image: String!
    productType: String!
    title: String!
    author: String!
    ISBN: String!
    grade: String!
    courses: [Course]!
    univeristies: [University]!
}
type S3Payload {
    signedRequest: String!,
    url: String!
}
type Mutation {
    addUniversity(input: addUniversityInput): University
    addCourse(input: addCoursesInput): Course
    addDegree(input: addDegreeInput): Degree
    addBook(input:addBookInput) : Book
    addBooks(fileName: String!, fileType: String!): S3Payload!
}
type Query {
     hello: String!
     """ 
     A query to get all the books a vendor has posted. 
     """
     getBooksByVendor(vendor:String!): [Book]
}
`

export {schema}
