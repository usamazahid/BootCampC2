let BooksReducer = (state, action)=>{
	switch(action.type){
		case "ADD":
		return[action.payload, ...state];
		case "REMOVE":
		return state.splice(action.index);
	}
}
export default BooksReducer;