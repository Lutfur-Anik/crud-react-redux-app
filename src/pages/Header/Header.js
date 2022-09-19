import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
            <Link to={'/'} className='nav-link' >Home</Link>
            <Link to={'/show-book'} className='nav-link' >Show Books</Link>
            <Link to={'/add-book'} className='nav-link' >Add Book</Link>
            </nav>
        </div>
    );
};

export default Header;