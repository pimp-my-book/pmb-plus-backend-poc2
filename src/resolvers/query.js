import db from '../../libs/db'


export const hello = (args, context) => {
    return "Your GraphQL API is now LIVE!🎈 "
}


export const getAllBooks = async (args, context) => {
    try {
        const allBooks = await db.query(`SELECT book.bookId, book.bookAuthor, book.bookISBN,  book.bookGrade, book.price , book.bookEdition , book.bookTitle, book.bookImage, vendor.vendorName 
        FROM book
        inner JOIN vendor on book.vendorId = vendor.vendorId`)

        await db.end()
       
   return allBooks.map((x) =>{
       return {
        title: x.bookTitle,
        vendor: x.vendorName,
        ID: x.bookId,
        price: x.price,
        image: x.bookImage,
        author: x.bookAuthor,
        ISBN: x.bookISBN,
        edition: x.bookEdition,
        grade: x.bookGrade
        
       }
   })

    
    } catch (e){
        return e
    }
}

export const getOneBook = async (args, contenxt) =>{

    try {

        const singleBook = db.query(`SELECT book.bookId, book.bookAuthor, book.bookISBN,  book.bookGrade, book.price , book.bookEdition , book.bookTitle, book.bookImage, vendor.vendorName 
        FROM book
        inner JOIN vendor on book.vendorId = vendor.vendorId
        WHERE bookId = ?`, [args.ID])

        return singleBook
        
    } catch (e){
        return e
    }
}