import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import NewMessage from './components/screens/NewMessage';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
function App() {
  return(
    <BrowserRouter>  
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/profile">
    <Profile />
    </Route>
    <Route path="/login">
    <Login />
    </Route>   
    <Route path="/signup">
    <Signup />
    </Route>   
    <Route path="/new-message">
    <NewMessage />
    </Route>   
    </BrowserRouter> 
)}

export default App;
