import React ,{useState}  from 'react';
//import M from 'materialize-css'
//import {useHistory} from 'react-router-dom'

const Profile = ()=> {
  //  const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const updateMessage=()=>{
       
/*    fetch(`/post/${message._id}`,{
        method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body
            })
        }).then(res=>res.json())
    .then(data=>{
       if(data.error){
          M.toast({html: data.error,classes:"#c62828 red darken-3"})
       }
       else{
           M.toast({html:"Updated Successfully",classes:"#43a047 green darken-1"})
           history.push('/')
       }
    }).catch(err=>{
        console.log(err)
    })
*/    
}
 
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
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
            placeholder="body"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
             />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>updateMessage()}
            >
                Update Message
            </button>

       </div>
   )
    }
export default Profile;