import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from './BookSlice';

const AddBook = () => {
    const[title,setTitle]=useState("")
    const[author,setAuthor]=useState("")
    
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const handleAdd=(e)=>{
        e.preventDefault();
        const books={id:uuidv4(),title,author};
        dispatch(addBook(books))
        navigate("/show-book",{replace:(true)})
    }
    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleAdd}>
                <div className="form-field ">
                    <label htmlFor='title'>
                        Title:
                    </label>
                    <input type="text" id='title' value={title} onChange={(e)=>setTitle(e.target.value)}
                    required/>
                </div>
            </form>

            <form onSubmit={handleAdd}>
                <div className="form-field ">
                    <label htmlFor='author'>
                        Author:
                    </label>
                    <input type="text" id='author' value={author} onChange={(e)=>setAuthor(e.target.value)}
                    required/>
                </div>
                <button type='submit'>Add Book</button>
            </form>
        </div>
    );
};

export default AddBook;