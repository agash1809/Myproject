
import React from 'react'
import './HHome.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

  return (

    <div className='body'> 
    <nav class="navbar background"> 
        <ul class="nav-list"> 
          
            <li><a href="#home">HOME</a></li> 
            <li><a href="#acdetails">ACCOUNT DETAILS</a></li> 
            <li><a href="#trans">TRANSACTION</a></li> 
            <li><a href='#signout'>SIGN OUT</a></li> 
        </ul> 

        <div class="rightNav"> 
        
            <button class="btm btn-sm" onClick={()=>navigate('login')}>LOGIN</button> 
            <button class="btn btn-sm" onClick={()=>navigate('signup')}>SIGNUP</button> 
            
        </div> 
    </nav> 
    <div>
        <div className='offer'>
        <h1>What we offer for you</h1>
        <br></br>
        <p>We provide online instant cash loans with quick approval that suit your team
        </p>
        </div>
    <div className='mc'>
        <div className='clogo'>
            <div className='aimg' >

            </div>

        

        </div>
        <div className='clogo blogo'>
        

        </div>
        <div className='clogo dlogo'>
        

        </div>
        </div>
        
    </div>
    <div className='blogo'>
        <section>

        </section>
    </div>

    
    <footer className="footer"> 
        <p className="text-footer"> 
            Copyright ©-All rights are reserved 
        </p> 
    </footer> 
</div> 
  )

} 

      
 

