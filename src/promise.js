import React from 'react'
let Promises = ()=>{
	return <h1>Hello</h1>;
}

let test = ()=>{
let promise = new Promise((resolve, reject)=>{
	return setTimeout(()=>{
		console.log("test");
		reject("hello");
	}, 1000);
});

return promise;
}

async function _asyncawait(){
	try{
	let result = await test();
	console.log(result);
}
catch(error){
	console.log(error);
}
}

_asyncawait();


export default Promises;