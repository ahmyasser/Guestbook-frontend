import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
const Home = ()=>{
    const [data,setData] = useState([]);
    const [messageReply,setReply] = useState("")

    useEffect(()=>{
       fetch('/posts',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           setData(result.posts)
       })
    },[]);

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
            console.log(result)
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
<div className="home">
{
    data.map(item=>{
        return(
<div className="card home-card" key={item._id}>
<h5>{item.postedBy.name}</h5>
<div className="message">
<h4>{item.title}</h4>
<p>{item.body}</p>
<form className="row" onSubmit={(e)=>{
    e.preventDefault()
    reply(messageReply,item._id)
}}>
<input value={messageReply} onChange={(e)=>setReply(e.target.value)} className="col s10" type="text" placeholder="send a reply...."/>
<Link onClick={()=>reply(messageReply,item._id)} to="/"><i className="material-icons col s2">send</i></Link>
</form>
{
    item.replys.map(record=>{
        return(
        <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
        )
    })
}
</div>
</div>)})}
</div>    
);
}

export default Home