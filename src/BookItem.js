import React, { Component } from 'react'
import BookDescription from './BookDescription'

class BookItem extends Component {
    render() {
        const {Book:book, updateBooks} = this.props     
        return (
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={book.shelf ? book.shelf : 'none'} onChange={(event) => updateBooks(book, event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <BookDescription Book={book} />
                </div>
            </li>
        )
    }
}
export default BookItem