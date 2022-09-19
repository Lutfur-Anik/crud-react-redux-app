import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import { Routes } from 'react-router-dom';
import Error from '../pages/Error/Error';
import Header from '../pages/Header/Header';
import ShowBook from './Feature/ShowBook';
import AddBook from './Feature/AddBook';
import EditBook from './Feature/EditBook';
const Index = () => {
    return (
       <BrowserRouter>
       <Header></Header>
       <main>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/show-book" element={<ShowBook/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/edit-book" element={<EditBook/>}/>
        <Route path="*" element={<Error/>}/>
       </Routes>
       </main>
       </BrowserRouter>
    );
};

export default Index;