import db from '../../libs/db'


export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}


export const getAllBooks = async (args, context) => {
    try {
        const allBooks = await db.query(`SELECT book.bookAuthor, book.bookISBN,  book.bookGrade, book.price , book.bookEdition , book.bookTitle, vendor.vendorName 
        FROM book
        inner JOIN vendor on book.vendorId = vendor.vendorId`)

        await db.end()
        return allBooks
    } catch (e){
        return e
    }
}