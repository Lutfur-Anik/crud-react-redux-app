import { configureStore } from "@reduxjs/toolkit";
import BookReducer from "../Feature/BookSlice";



const store=configureStore({
    reducer:{
         booksReducer:BookReducer
    }
});
export default store;