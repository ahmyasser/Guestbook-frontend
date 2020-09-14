import React from 'react';

const NewMessage= ()=>{

 return(
       <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}>
           <input 
           type="text"
            placeholder="title"
            //value={title}
            //onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
             placeholder="body"
             //value={body}
            //onChange={(e)=>setBody(e.target.value)}
             />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            //onClick={()=>postDetails()}
            >
                Send Message
            </button>

       </div>
   )
}

export default NewMessage;