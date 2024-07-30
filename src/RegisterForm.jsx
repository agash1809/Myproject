import React,{useState} from 'react';
import './RegisterCss.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterForm=()=>{
     const[email,setEmail]=useState( '');
     const[password,setPassword]=useState( '');
     const[name,setName]=useState('');
     const[confirmpassword,setConfirmpassword]=useState('');
     const navigate=useNavigate();
    //  const[isRegister,setIsRegister]=useState(true);

     const handleSubmit=(event)=>{
        event.preventDefault();
        const userdata={
         Email:email,
         Password:password,
         Name:name
     }
     axios.post('http://localhost:8080/users', userdata)
     .then(res => {
         console.log(res.data);
         navigate('/login');
       })
       .catch(error => {
         console.log("Something went wrong " + error);
       });

     };
     return(
        <div >
         <div className='Mbody'>
            <div className='box'>
             <span className='text-center'>Register</span>
               <form onSubmit={handleSubmit}>
              <div className='input-container'>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required />
                <label>Name</label>
                </div>
                <div className='input-container'>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                <label>Email</label>
                </div>
                <div className='input-container'>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required></input>
                <label>Password</label>
                </div>
                <div className='input-container'>
                <input type="password" value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)} required></input>
                <label>Confirm Password</label>
                </div>
                
        
             <button   type="submit">REGISTER</button>
               </form>
             
        
          
             </div>
             </div>
             </div>

     
     );


};
export default RegisterForm;