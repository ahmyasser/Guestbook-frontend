import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

const Message = ({item,updateMessage, deleteMessage, state, setBody,setTitle,title,body,data,setData})=>{
    const [messageReply,setReply] = useState("");
    const reply = (text,postId)=>{
        fetch('/reply',{
            method:"put",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    postId,
                    text
                })
            }).then(res=>res.json())
            .then(result=>{
                const newData = data.map(item=>{
                  if(item._id===result._id){
                      return result
                  }else{
                      return item
                  }
               })
              setData(newData)
            }).catch(err=>{
                console.log(err)
            })
      }
    

    return(
           
<div className="card home-card">
<h5 style={{padding:"5px", float:"right"}}> {item.postedBy._id === state._id 
    &&<Link to='/'> <i className="material-icons" 
    onClick={()=>deleteMessage(item._id)}>delete</i></Link>} 
    </h5>
<h5 style={{padding:"5px", float:"right"}}> {item.postedBy._id === state._id 
    && <Popup trigger={<Link to="/"><i className="material-icons" 
    >edit</i></Link> }>
    {close => (
    <div className="card input-filed"
       style={{
           margin:"30px auto",
           maxWidth:"500px",
           padding:"20px",
           textAlign:"center"
       }}>
           <input 
           type="text"
            placeholder={item.title}
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
           <input
            type="text"
            placeholder={item.body}
            value={body}
            onChange={(e)=>setBody(e.target.value)}
             />
            <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>{updateMessage(item);
                setTitle('');
                setBody('');
                close();
            }
            
            }
            >
                Update Message
            </button>

       </div>
    )}
    </Popup>

} 
    </h5>
            
<h5>{item.postedBy.name}</h5>
<div className="message">
<h4>{item.title}</h4>
<p>{item.body}</p>
<form className="row" onSubmit={(e)=>{
    e.preventDefault();
    reply(messageReply,item._id);
    setReply('');
}}>
<input value={messageReply} onChange={(e)=>setReply(e.target.value)} className="col s10" type="text" placeholder="send a reply...."/>
<Link onClick={()=>{reply(messageReply,item._id); setReply('');}} to="/"><i className="material-icons col s2">send</i></Link>
</form>
{
    item.replys.map(record=>{
        return(
        <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
        )
    })
}
</div>
</div>
        );

}
export default Message;
