import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props)
    this.updateBooks = this.updateBooks.bind(this)
  }
  state = {
    books: []
  }
  fetchAllBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  componentDidMount() {
    this.fetchAllBooks()
  }
  updateBooks(book, shelf) {
    BooksAPI.update(book, shelf).then((books) => {
      this.fetchAllBooks()
    })
  }
  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => (
          <ListBooks Books={this.state.books} updateBooks={this.updateBooks} />
        )} />
        <Route path="/search" render={() => (
          <SearchBooks Books={this.state.books} updateBooks={this.updateBooks} />
        )} />
      </div>
    )
  }
}

export default BooksApp
