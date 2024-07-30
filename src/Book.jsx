import React, { useState } from 'react'
import './Book.css';
import { useNavigate } from 'react-router-dom';

export default function Book() {
  const navigate = useNavigate();
    const [Name,setName]=useState('');
    const[NumOfPeople,setNumofPeople]=useState('');
    const[time,setTime]=useState('');
    const[Date,setDate]=useState('');
    const[totalhrs,setTotalhts]=useState('');
    const handleSubmit=(event)=>
    {
      event.preventDefault();
      setName(' ');
      setNumofPeople(' ');
      setTime(' ');
      setDate(' ');
      setTotalhts(' ');

    }

  return (
    <div>
          <div className='Mbody'>
            <div className='box'>
             <span className='text-center'>Fix My Journey</span>
               <form onSubmit={handleSubmit}>
              <div className='input-container'>
                <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} required />
                <label>Name</label>
                </div>
                <div className='input-container'>
                <input type="number" value={NumOfPeople} onChange={(e)=>setNumofPeople(e.target.value)} required></input>
                <label>Total Number of People</label>
                </div>
                <div className='input-container'>
                <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} required></input>
                <label>Time</label>
                </div>
                <div className='input-container'>
                <input type="Date" value={Date} onChange={(e)=>setDate(e.target.value)} required></input>
                <label>Date</label>
                </div>
                <div className='input-container'>
                <input type="number" value={totalhrs} onChange={(e)=>setTotalhts(e.target.value)} required></input>
                <label>Date</label>
                </div>
                
        
               </form>
             
             <button   type="submit" className='btnnn' onClick={()=>navigate('/payment')}>Book Now</button>
        
          
             </div>
             </div>
      
    </div>
  )
}
