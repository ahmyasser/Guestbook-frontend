import React from 'react';
import {Link} from 'react-router-dom';
const Signup = ()=>{
    return( <div className="mycard">
    <div className="card auth-card input-field">
      <h2>Guestbook</h2>
      <input
      type="text"
      placeholder="name"
      //value={name}
      //onChange={(e)=>setName(e.target.value)}
      />
      <input
      type="text"
      placeholder="email"
      //value={email}
      //onChange={(e)=>setEmail(e.target.value)}
      />
      <input
      type="password"
      placeholder="password"
      //value={password}
      //onChange={(e)=>setPasword(e.target.value)}
      />
      <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
      //onClick={()=>PostData()}
      >
          SignUP
      </button>
      <h5>
          <Link to="/login">Login</Link>
      </h5>
       
         
   
      

  </div>
</div>
    );
}

export default Signup;