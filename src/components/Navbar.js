import React from 'react';

const Navbar = ()=>{

    return(
      <nav>
      <div className="nav-wrapper grey lighten-5">
        <a href="/" className="brand-logo left">Guestbook</a>
        <ul id="nav-mobile" className="right ">
          <li><a href="sass.html">Login</a></li>
          <li><a href="badges.html">Signup</a></li>
          <li><a href="collapsible.html">Myposts</a></li>
        </ul>
      </div>
    </nav>
    );
}
export default Navbar;