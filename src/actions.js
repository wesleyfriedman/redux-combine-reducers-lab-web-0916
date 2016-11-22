export function addBook(book){
  return (
    {type: 'ADD_BOOK',
    title: book.title,
    author: book.author
  })
}

export function addRecommendedBook(book){
  return (
    {type: 'ADD_RECOMMENDED_BOOK',
    title: book.title,
    author: book.author
  })
}

export function removeBook(book){
  return (
    {type: 'REMOVE_BOOK',
    title: book.title,
    author: book.author
  })
}

export function removeRecommendedBook(book){
  return (
    {type: 'REMOVE_RECOMMENDED_BOOK',
    title: book.title,
    author: book.author
  })
}
