
import React from 'react'
import './HHome.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

  return (

    <div className='body'> 
    <nav class="navbar background"> 
        <ul class="nav-list"> 

            <li><a href="#home">Home</a></li> 
            <div className='dropdown'>
                <li onClick={()=>navigate('/AccountDetailsPage')}><a href="#acdetails">Account Details</a></li> 
                {/* <button className='dropbtn'>Account Details</button> */}
                 {/* <div className='dropcontent'>
                  <a href='#pro'>Profile</a>
                    <a href='#bal'>Balance</a>
                    <a href='#bc'>Branch Code</a>
                    <a href='#if'>IFSC</a>
                   
                    
             </div>  */}
            </div>
            <div className='dropdown'>
                <li><a href="#trans">Transaction</a></li> 
                <div className='dropcontent'>
                    <a onClick={()=>navigate('/transaction')}>Amount Transfer</a>
                    <a onClick={()=>navigate('/TransactionHistory')}>Transaction history</a>
                </div>
            </div>

            <li onClick={()=>navigate('/Loans')}><a href='#Loan'>Loans</a></li> 
            <li onClick={()=>navigate('/ContactPage')}><a href='#insu'>Contact</a></li> 
            <li onClick={()=>navigate('/Aboutpage')}><a href='#about'>About</a></li>
        </ul> 

        <div class="rightNav"> 
        
        <button class="bt btn-sm" onClick={()=>navigate('/home')}>SIGN OUT</button> 
        
        
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
            <h3>
                Loans
            </h3>
            
            <ul className='ulh'>
               <li className='ulh'>Borrow-₹50000 for 3 months</li>
               <li className='ulh'>Interest rate - 292% pa fixed</li>
               <li className='ulh'>Total amount payable - ₹63000</li>
               <li className='ulh'>Representative - 1,286% APR</li>
            
            </ul>
        

        

        </div>
        <div className='clogo'>
            <div className='bimg'>

            </div>
            <h3>
                Insurance
            </h3>
        
            <ul className='ulh'>
                <li>Home Insurance</li>
                <li>Health Insurance</li>
                <li>Car Insurance</li>
                <li>Bike Insurance</li>
                
            </ul>
           
          
        

        </div>
        <div className='clogo dlogo'>
            <div className='cimg'></div>
            <h3>
                Interest

            </h3>
            <ul className='ulh'>
                <li>upto 7%-10%</li>
                <li>Accured Interest</li>
                <li>Compound Interest</li>
            </ul>
        

        </div>
        </div>
        
    </div>
    <div className='blogo'>
        <section>

        </section>
    </div>

    
    <footer className="footer"> 
        <p className="text-footer"> 
            The INNOVATE BANK LIMITED, Registered & Central Office, No.20 Paris corner, New York-000001.
            <br></br><br></br>
             Phone: 04324-269000 Fax: 0432-00001 CIN:L65110NY1916PLC0012956</p>
         
             <div className='row'>
                <img src='https://www.kvb.co.in/img/landing/facebook.png' alt='fb' width={50} height={50} ></img>
                <img src='https://www.kvb.co.in/img/landing/youtube-icon.png' alt='fb' width={50} height={50} ></img>
                <img src='https://www.kvb.co.in/img/landing/instagram-icon.png' alt='fb' width={50} height={50}></img>
                <img src='https://freelogopng.com/images/all_img/1690643640twitter-x-icon-png.png' alt='fb' width={50} height={50}></img>
                <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png' alt='fb' width={50} height={50}></img>
                <img src='https://www.kvb.co.in/img/landing/whatsapp-icon.png' alt='fb' width={50} height={50}></img>

             </div>
             <p> © 2023 INNOVATE BANK</p>
        
    </footer> 
</div> 
  )

} 

      
 

