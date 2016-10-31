import { books, recommendedBooks } from '../src/reducers'
const addBook = "ADD_BOOK"
const removeBook = "REMOVE_BOOK"

describe('books reducers', function() {
  it('responds to the "ADD_BOOK" action by adding the book', function() {
    let book = { title: "Professional JavaScript for Web Developers", author: "Nicholas C. Zakas" }
    let action = { type: addBook, payload: book }
    let state = []
    expect(books(state, action)).toInclude(book)
  })
  it('does not modify previous state object', function(){
    const state = []
    let fakeBook = { title: "None", author: "No One!" }
    expect(books(state, { type: addBook, payload: fakeBook })).toNotEqual(state)
  })
  it('responds to the "REMOVE_BOOK" action by removing the book', function() {
    let func = { title: "Functional JavaScript", author: "Michael Fogus" }
    let patterns = { title: "JavaScript Patterns", author: "Stoyan Stefanov" }
    const state = [func, patterns]
    let action1 = { type: removeBook, payload: func }
    let newState = books(state, action1)
    expect(newState).toNotInclude(func)
    let action2 = { type: removeBook, payload: patterns }
    newState = books(newState, action2)
    expect(newState).toNotInclude(patterns)
  })
})
