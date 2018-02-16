import { combineReducers } from 'redux';
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_activeBook";
const rootReducer = combineReducers({
  books: BooksReducer,
  ActiveBook: ActiveBook
});

export default rootReducer;