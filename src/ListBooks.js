import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'

class ListBook extends Component {
    render() {
        const { Books, updateBooks } = this.props
        const currentlyReading = Books.filter((book) => book.shelf === "currentlyReading")
        const wantToRead = Books.filter((book) => book.shelf === "wantToRead")
        const read = Books.filter((book) => book.shelf === "read")
        let bookShelfList = {'Currently Reading':currentlyReading,'Want To Read':wantToRead,'Read':read};
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BooksShelf bookShelfList={bookShelfList} updateBooks={updateBooks} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}
export default ListBook