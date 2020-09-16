import React,{useEffect,createContext,useReducer,useContext, useState} from 'react';
import NavBar from './components/Navbar';
import "./App.css";
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import NewMessage from './components/screens/NewMessage';
import {reducer,initialState} from './reducers/userReducer';
import Profile from './components/screens/Profile';

export const UserContext = createContext();

const Routing = ()=>{
  const history = useHistory()
  const {dispatch} = useContext(UserContext)
const [message,setMessage] = useState({});
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
       history.push('/login')
    }
  },[dispatch,history]);

  return(
    <Switch>
      <Route exact path="/" >
      <Home passMessage={setMessage}/>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route message={message} exact path="/profile">
        <Profile />
      </Route>
      <Route path="/new-message">
        <NewMessage/>
      </Route>      
    </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
