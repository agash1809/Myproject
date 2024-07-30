
import React,{useState} from 'react'
import './HHome.css';
import { FaBars} from "react-icons/fa";
import Book from './Book.jsx';
// import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

import { useNavigate } from 'react-router-dom';
import SidePanel from './SidePanel';
import bgv1 from './videos/bgv1.mp4';


export default function Home() {

    const navigate = useNavigate();
    const year=new Date();
    const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (

    <div className='body'> 
    <nav class="navbar"> 
        <ul class="nav-list"> 
     <div className='sidepanel'>
      <button onClick={togglePanel} className="open-btn">
    {/* <IoReorderThreeOutline /> */}
    < FaBars/>
    
      </button>
      <SidePanel isOpen={isPanelOpen} togglePanel={togglePanel} />
  </div>  
           
         
         
            <li><a >Home</a></li> 
            <li onClick={()=>navigate('/Offers')} >Offers<a ></a></li> 
            <li onClick={()=>navigate('/ContactPage')}><a >Contact</a></li> 
            <li onClick={()=>navigate('/faq')}><a >FAQ</a></li> 
            <li onClick={()=>navigate('/Aboutpage')}><a >About</a></li>
        </ul> 
        <div class="rightnav"> 
            <button class="lbutton" onClick={()=>navigate('/login')}>LOGIN</button> 
            <button class="lbutton sbutton" onClick={()=>navigate('/signup')}>SIGNUP</button> 
            
        </div> 
       

        
            
    </nav> 

  
    <div >
    <hr className='hrr'/>
    <main>
        <div className='mvideo'>
        <div className="overlay"></div>
            <video src={bgv1} autoPlay loop muted></video>
             <div className="video-content">Fix My Journey<br/><br/>
             
                
                <hr/></div>
             
             
        </div>
    <br/>
    <br/>
    <div>
     <div className="mc1 " >
        <div>
        <h2 className='bname'>Indoora</h2>
        </div>
            <br/>
        <div className='ldiv'>
         <ul className='listContent'>
            <li>Location: Front Row, Dal Lake</li>
            <li>Owner: Gh.Rahim Ratta</li>
            <li>Category: Deluxe</li>
            <li>No.of Rooms: 3 Bed Rooms</li>
             <li>Max-people: 15</li>
             <li>Rent: Rs.100/hr</li>
        
         </ul>
        </div>
       <div style={{ 
      backgroundImage: 'url(https://www.carnivaltourskochi.com/uploads/1/2/5/4/12541412/4962850_orig.gif)', 
       backgroundRepeat: "no-repeat",backgroundSize:"cover"
    }} className='img1'></div>

       
        <buttom className="BookButton" onClick={()=>navigate('/Book')}>Book Now</buttom>
        
     </div>
     <br></br>
     <div className="mc1 "   >
        <div>
        <h2 className='bname'>Alexendra</h2>
        </div>
            <br/>
        <div className='ldiv'>
         <ul className='listContent'>
            <li>Location: 	2nd Row Golden Lake</li>
            <li>Owner: 	Ab. Majeed Mir</li>
            <li>Category: Deluxe</li>
            <li>No.of Rooms: 3 Bed Rooms</li>
             <li>Max-people: 15</li>
             <li>Rent: Rs.150/hr</li>
         </ul>
         </div>
         <div style={{ 
      backgroundImage: 'url(https://cruiseland.in/wp-content/uploads/2019/03/backwatercruise6.jpg)', 
       backgroundRepeat: "no-repeat"
    }} className='img1'></div>
        
        <buttom className="BookButton" onClick={()=>navigate('/Book')}>Book Now</buttom>
        
     </div>
     <br></br>
     <div className="mc1" >
        <div>
        <h2 className='bname'>Ceylon</h2>
        </div>
            <br/>
        <div className='ldiv'>
         <ul className='listContent'>
            <li>Location: Mooning Back II row</li>
            <li>Owner: 	Ab. Rashid Badyari</li>
            <li>Category: Super-Deluxe</li>
            <li>No.of Rooms: 5 Bed Rooms</li>
             <li>Max-people: 20</li>
             <li>Rent: Rs.500/hr</li>
         </ul>
         </div>
         <div style={{ 
      backgroundImage: 'url(https://wallpapercave.com/wp/wp4479203.jpg)', 
       backgroundRepeat: "no-repeat"
    }} className='img1'></div>
        
           
        <buttom className="BookButton" onClick={()=>navigate('/Book')}>Book Now</buttom>
        
     </div>
     <br></br>
     <div className="mc1" >
        <div>
        <h2 className='bname'>Firdous</h2>
        </div>
            <br/>
        <div className='ldiv'>
         <ul className='listContent'>
            <li>Location: 	IIIrd Row Dallake</li>
            <li>Owner: Ab. Rehman Kolu</li>
            <li>Category: Deluxe</li>
            <li>No.of Rooms: 3 Bed Rooms</li>
             <li>Max-people: 15</li>
             <li>Rent: Rs.100/hr</li>
         </ul>
         </div>
         <div style={{ 
      backgroundImage: 'url(https://e0.pxfuel.com/wallpapers/385/172/desktop-wallpaper-kerala-boat-house-kerala-boat-house-romantic-boat.jpg)', 
      backgroundRepeat: "no-repeat"
    }} className='img1'></div>
        
        <buttom className="BookButton" onClick={()=>navigate('/Book')}>Book Now</buttom>
        
     </div>
     <br></br>
     <div className="mc1" >
        <div>
        <h2 className='bname'>New Pride of Kashmi</h2>
        </div>
            <br/>
        <div className='ldiv'>
         <ul className='listContent'>
            <li>Location: 1st Row Dallake</li>
            <li>Owner: Mohammad Yousuf Bato</li>
            <li>Category: Deluxe</li>
            <li>No.of Rooms: 3 Bed Rooms</li>
             <li>Max-people: 18</li>
             <li>Rent: Rs.180/hr</li>
         </ul>
         </div>
         <div style={{ 
      backgroundImage: 'url(https://4.imimg.com/data4/JI/VO/ANDROID-37697916/product-500x500.jpeg)', 
      backgroundRepeat: "no-repeat"
    }} className='img1'></div>
        
           
        <buttom className="BookButton" onClick={()=>navigate('/Book')}>Book Now</buttom>
        
     </div>
     <br></br>
   
        </div>
    </main>
    </div>
   
   {/* <div className=""><SidePanel/></div> */}
     <div>
    <footer className="footer"> 
        <p className="text-footer"> 
            Fix My Journey Registered & Central Office, No.20 Paris corner, New York-000001.
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
             <p> © {year.getFullYear()} Fix My Journey</p>
        
    </footer> 
    </div> 
</div> 
  )

} 

      
 

