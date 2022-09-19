import { createSlice } from "@reduxjs/toolkit"
const { v4: uuidv4 } = require('uuid');

const initialBook={
    books:[
        {
          id:uuidv4(),title:"Himu",author:"Humayun Ahmed"
        },
        {
            id:uuidv4(),title:"Misir Ali",author:"Humayun Ahmed"
        }
    ]
}
export const bookSlice=createSlice({
    name:"books",
    initialState:initialBook,
    reducers:{
      showBook:(state)=>state,
      addBook:(state,action)=>{
        state.books.push(action.payload)
      },
       updateBook:(state,action)=>{
        const { id, title, author } = action.payload;
        const isBookExist = state.books.filter((book) => book.id === id);
        if (isBookExist) {
          isBookExist[0].title = title;
          isBookExist[0].author = author;
       }

      },
      deleteBook:(state,action)=>{
        const id=action.payload;
       state.books= state.books.filter(book=>book.id !== id)
      }
    },
});
export const{showBook,addBook,deleteBook,updateBook}=bookSlice.actions;
export default bookSlice.reducer;