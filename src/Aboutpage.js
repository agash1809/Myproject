
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Aboutpage.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const AboutPage = () => {
  const navigate = useNavigate();
  return (
    <div className='aboutp'>
      <nav class="av"> 
        <ul class="nav-list"> 

            <li onClick={()=>{navigate("/NHome")}}><a href="#trans">Home</a></li> 
        
           
        </ul> 

    </nav>
        <div className='para'>
      <h1>About Our Bank</h1>
        <br>
        </br>
      <p>Welcome to our bank application. We strive to provide exceptional banking services to our customers.</p>
      <p>Our mission is to ensure the security of your funds and offer convenient banking solutions tailored to your needs.</p>
      <p>For any inquiries or assistance, please contact our customer support.</p>
      <p>With a rich history of trust and reliability, we strive to provide a seamless and secure banking experience for our customers.</p>
       <p>  Our dedicated team of professionals is committed to understanding your unique financial goals and offering tailored solutions to help you achieve them. Whether you're planning for the future, buying a home, or simply managing your day-to-day finances, we are here to support you every step of the way. Explore a world of convenience with our cutting-edge online banking services, coupled with the warmth and reliability of traditional banking. Join us on a journey towards financial success with INNOVATE.</p>
      <p> Your dreams are our mission.</p>
     <p>Contact :</p><p className='i'> innovate@gmail.com</p>






      <marquee>Thank you for choosing our bank!</marquee>
      </div>
    </div>
  );
};

export default AboutPage;