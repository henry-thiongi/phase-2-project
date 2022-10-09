import React from 'react';
import '../App';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
           <h1>Henry Book App</h1>
        </div>
        <div>  
            <Link to='/Favorite'>
            <h3>your Favorite</h3>
            </Link>
        </div>
    </div>
  );
};

export default Navbar;