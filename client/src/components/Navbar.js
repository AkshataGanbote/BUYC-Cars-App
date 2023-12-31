import React from 'react';
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const Logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate('/auth')
  }

  return (
    <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/add-car'>Add Car</Link>
        <Link to='/saved-cars'>Saved Cars</Link>
        {!cookies.access_token ? (
          <Link to='/auth'>Login/Register</Link>
        ) : (
        <button onClick={Logout}>Logout</button>
        )}
        
    </div>
  )
}

export default Navbar