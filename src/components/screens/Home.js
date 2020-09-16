import React,{useState, useEffect, useContext} from 'react';
import {UserContext} from '../../App'
import M from 'materialize-css';
import Message from './Message';
const Home = ()=>{
    const [data,setData] = useState([]);
    const {state} = useContext(UserContext);
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const updateMessage=(message)=>{
       
    fetch(`/post/${message._id}`,{
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
    .then(result=>{
       if(result.error){
          M.toast({html: result.error,classes:"#c62828 red darken-3"})
       }
       else{
           M.toast({html:"Updated Successfully",classes:"#43a047 green darken-1"});
           const newData = data.map(item=>{
            if(item._id===result._id){
                return result
            }else{
                return item
            }
         })
        setData(newData);
        }
    }).catch(err=>{
        console.log(err)
    })
    
}

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

  const deleteMessage = (messageid)=>{
    fetch(`/post/${messageid}`,{
        method:"delete",
        headers:{
            Authorization:"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result=>{
        const newData = data.filter(item=>{
            return item._id !== result._id
        })
        setData(newData)
    })
}
    return(
<div className="home">
{
    data.map(item=>{
        return(
<Message item={item} updateMessage={updateMessage} deleteMessage={deleteMessage}  state={state}    setBody={setBody}  setTitle={setTitle} title={title} body={body} data={data} setData={setData}  key={item._id}/>
        )})}
</div>    
);
}

export default Home