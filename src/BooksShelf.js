import React, { Component } from 'react'
import BookItem from './BookItem'

class BooksShelf extends Component {
    render() {
        const { bookShelfList, updateBooks } = this.props
        return (
            <div>
                {bookShelfList && Object.keys(bookShelfList).map((shelf_title, books) =>
                    <div className="bookshelf" key={books}>
                        <h2 className="bookshelf-title">{shelf_title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {bookShelfList[shelf_title] && bookShelfList[shelf_title].map((book) =>
                                    <BookItem Book={book} updateBooks={updateBooks} key={book.id} />
                                )}
                            </ol>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
export default BooksShelf