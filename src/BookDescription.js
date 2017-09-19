import React, { Component } from 'react'

class BookDescription extends Component {
    render() {
        const { Book } = this.props
        return (
            <div>
                <div className="book-title">{Book.title}</div>
                <div className="book-authors">{Book.authors && Book.authors.join(', ')}</div>
            </div>
        )
    }
}
export default BookDescription