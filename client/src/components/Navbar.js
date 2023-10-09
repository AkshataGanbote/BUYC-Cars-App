import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/auth'>Login/Register</Link>
        <Link to='/add-car'>Add Car</Link>
        <Link to='/saved-cars'>Saved Cars</Link>
    </div>
  )
}

export default Navbar