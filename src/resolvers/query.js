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
        //console.log(allBooks)
   return allBooks.map((x) =>{
       return {
        title: x.bookTitle,
        vendor: x.vendorName,
        ID: x.bookId,
        price: x.bookPrice,
        image: x.bookImage,
        author: x.bookAuthor,
        ISBN: x.bookISBN,
        edition: x.bookEdition,
        grade: x.bookGrade
        
       }
   })

     //console.log(books)

     //return books
        
    } catch (e){
        return e
    }
}

/*

allBooks.map(x => {
        
            title: x.bookTitle
             vendor:x.vendorName
*/