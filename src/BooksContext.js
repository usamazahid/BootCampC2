import {createContext} from 'react';

let books = [{desc:"A", amount:1},{desc:"A", amount:1},{desc:"A", amount:1}];

let BooksContext = createContext(books);

export default BooksContext;