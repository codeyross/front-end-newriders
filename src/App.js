import 'bootswatch/dist/pulse/bootstrap.min.css';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/TopBar"
import Main from './components/Main';
import MoodMap from './components/MoodMap';
import Navbar from './components/Navbar';
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import TAP from "./components/TAP"
import Animal from './components/Animal'

import Login from './components/Login';
import Register from './components/Register';

import AppContext from './components/AppContext';


import React, { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

function App() {
  
  const [loggedIn, setLoggedIn] = useState(false);

  const userSettings = {
    loggedIn: loggedIn,
    setLoggedIn,
  };



  useEffect(() => {
    axios.get('http://localhost:8001/checkAuthentication')
      .then(res => {
        setLoggedIn(res.data.authenticated);
      })
      .catch((error) => {
        setLoggedIn(false)
    });
  }, []);

  function handleChange(){
 
  }

  return (
    <AppContext.Provider value={userSettings}>
        
	 
    {loggedIn ? 
    (
         <Box className="App">
         <TopBar/>
         <Stack direction="row" spacing={2} justifyContent="space-between">
         <Navbar />
           
              <Routes>
       <Route path="/" element={<Main/>}/>
       <Route path="/tap" element={<TAP/>}/>
       <Route path="/animals" element={<Animal/>}/>
       </Routes>
          </Stack>
       </Box>
    ) : (
      <div>

        <Link to="/register">
         Signup
        </Link>
        <Link to="/login">
          Login
        </Link>
      </div>
    )}
       <Routes>
       <Route  path="/" element={<></>}/>
   
       <Route  path="/register" element={<Register />}/>
       <Route  path="/login" element={<Login onChange={handleChange}/>}/>    
        </Routes>

  </AppContext.Provider>
  );
}

export default App

