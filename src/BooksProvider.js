import React, {useContext, useReducer} from 'react';
import BooksContext from './BooksContext';
import BooksReducer from './BooksReducer';

let BooksProvider = ({children})=>{

	let ContextValue = useContext(BooksContext);
	let [state, dispatch] = useReducer(BooksReducer, ContextValue);
	
	
	function addBooks(BookObj){
		dispatch({
			type:"ADD", 
			payload:{
				desc:BookObj.desc, 
				amount:BookObj.amount
			}});
	}

		function removeBooks(index){
		dispatch({
			type:"REMOVE", 
			index: index
		});
	}
	

	return(<BooksContext.Provider value={{
			transactions:state,
			addBooks,
			removeBooks
			}}>
			{children}
			</BooksContext.Provider>
		);
}

export default BooksProvider;