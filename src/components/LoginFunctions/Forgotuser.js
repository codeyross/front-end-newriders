import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Temppassword from './Temppassword';


function Forgotuser() {
  
  const [email, setEmail] = useState("");

  const nav = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();

    axios.post('http://localhost:8001/forgotuser' , {
      email: email,
     }).then((res)=>{
         console.log(res);
            nav("/usernameconfirm");
}).catch((error) => {
 console.log(error)
});
     }

  return (
    <div className="container">
      <h1>Forgot Username</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-static"
          label="Email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            color: "black",
            backgroundColor: "white",
            borderColor: "purple",
          }}
        >
          Submit
        </Button>
      </form>
      <div className="container">
        <img src="https://i.imgur.com/hPOPqz3.jpg"></img>
      </div>
      <Temppassword />
    </div>
  );
}

export default Forgotuser