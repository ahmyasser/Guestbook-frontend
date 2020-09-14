import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = ()=>{

    return(
      <nav>
      <div className="nav-wrapper grey lighten-5">
        <Link to="/" className="brand-logo left">Guestbook</Link>
        <ul id="nav-mobile" className="right ">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/profile">Myposts</Link></li>
        </ul>
      </div>
    </nav>
    );
}
export default Navbar;