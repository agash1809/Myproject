

import React, { useRef, useState, useContext } from 'react';
import { TextField , Button , Container} from '@mui/material';
import {Link, useNavigate } from 'react-router-dom';
import './SignIn.css'

import axios from 'axios';

const SignIn= () => {

  const [email, setMailid] = useState('');
  const handleMail = (event) => { 
      setMailid(event.target.value) 
  }
  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }
  const handleSubmit = (event) => {

    event.preventDefault();
    axios.get(`http://localhost:3000/users?email=${email}&password=${password}`)
      .then(res=>{
        if(res.data.length>0)
        {
           navigate("/Nhome");
        }
        else{
          alert("User account doesn't exist");
        }
      }

        )
      
  }

  let navigate=useNavigate();
  let gotosignup=useNavigate();

  return (
    <div className='sbody'>
    <>
    <div className='logoof'>
    </div>
    <div className='bigrow'>
      <Container className="column1">
        {/* <img src='https://i.pinimg.com/564x/0c/9b/89/0c9b89b62ba04b4b4740f4ce2da28b54.jpg'></img> */}
        <h1 className="banklogo">         INNOVATE-BANK
      </h1>
      <br></br>
    <p>A Safe and Secure Bank for your money and assets</p>
      </Container>
    <Container  maxWidth='xs' className="column2" >

        <h1 id="head">Login</h1>
        <form onSubmit={handleSubmit}>

          <TextField variant="outlined" margin="normal" required fullWidth label="Email" onChange={handleMail}>
              {email}
          </TextField>

          <TextField variant="outlined" margin="normal" required fullWidth label="Password" type="password" onChange={handlePassword}>
              {password}
          </TextField>

          

          <Button type="submit" fullWidth variant="contained" color="primary">
            Log In
          </Button>
          <br></br>
          <br></br>
       
           <br></br>      
             <div className="rs">         
              <label onClick={()=>navigate('/signup') }  >New User? Register</label>
       </div>
        </form>
    </Container>
    </div>
    </>
    </div>
  );
};

export default SignIn ;