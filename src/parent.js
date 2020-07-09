import React, {useContext, useReducer} from 'react';
import  BooksContext from './BooksContext';
import BooksProvider from './BooksProvider';
import BooksReducer from './BooksReducer';
import Promises from './promise';

let Parent = () =>{
	let {addBooks, removeBooks, transactions} = useContext(BooksContext);
	console.log(transactions);
	function getAmount(){
		let total = 0;
		for(let {amount} of transactions){
			if(amount>0)
				total += amount;
		}
		return total;
	}

	function getIndex(event){
		console.log(event);
	}
	return(
	<div>
		<span>{getAmount()}</span>
		<ul>
		{transactions.map((Object, index)=>{
			return(
					<li key={index} onClick={()=>{removeBooks(index)}}>{Object.desc}</li>
				);
		})}
		</ul>
		<button onClick={()=>{addBooks({desc:"B", amount:1})}}>Click</button>	
		<Promises />
	</div>
	);
}

export default Parent;