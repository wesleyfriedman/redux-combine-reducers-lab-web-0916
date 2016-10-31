import { books, recommendedBooks } from '../src/reducers'

describe('books reducers', function() {
  it('responds to the "ADD_BOOK" action', function() {
    var book = { title: "Professional JavaScript for Web Developers", author: "Nicholas C. Zakas" }
    var action = { type: "ADD_BOOK", payload: book }
    var state = []
    debugger
    expect(books(state, action)).to.contain(book)
  })
  it('does not modify existing state object', function(){
    expect(newState).to.not.equal(state)
  })

})
