export function selectBook(book) {
  return {
    //selectBook is an action creator, it needs to returned
    //an action: an object with a type property.
    type: "BOOK_SELECTED",
    payload: book
  };  
}
