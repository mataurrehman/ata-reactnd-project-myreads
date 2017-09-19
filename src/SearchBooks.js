import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookItem from './BookItem'

class SearchBooks extends Component {
    state = {
        searchQuery: '',
        BooksFound: [],
        search_error:''
    }
    updateQuery = (searchQuery) => {
        this.setState({ searchQuery: searchQuery.trim() })
        BooksAPI.search(this.state.searchQuery, 20).then((BooksFound) => {
            if (BooksFound && BooksFound !== undefined) {
                if(!BooksFound.error || BooksFound.error !== "empty query") {
                    BooksFound.map((searchedBook) => { // checking if search result has books from existing shelves then default selected shelf for dropdowns is adjusted accordingly.
                        for (const existingBook of this.props.Books) {
                            if (searchedBook.id === existingBook.id) {
                                searchedBook.shelf = existingBook.shelf
                            }
                        }
                        return searchedBook
                    })
                    this.setState({ BooksFound:BooksFound, search_error:'' })
                } else {
                    this.setState({search_error:'No Result Found', BooksFound:[]})
                }
            }
        })
    }
    render() {
        const { updateBooks } = this.props
        const { searchQuery, BooksFound, search_error } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {BooksFound && BooksFound.map(book =>
                            <BookItem Book={book} updateBooks={updateBooks} key={book.id}/>
                        )}
                        {search_error && search_error}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBooks