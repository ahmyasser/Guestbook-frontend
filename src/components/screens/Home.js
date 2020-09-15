import React,{useState, useEffect} from 'react';
const Home = ()=>{
    const [data,setData] = useState([])
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
<div className="row">
<input className="col s10" type="text"placeholder="send a reply...."/>
<i className="material-icons col s2">send</i>
</div>
</div>
</div>)})}
</div>    
);
}

export default Home