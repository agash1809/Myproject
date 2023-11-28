

import React from 'react';
import Home from './Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import BankingSignUp from './Signup';
import Nhome from './Nhome';
import AboutPage from './Aboutpage.js';
import TransactionPage from './TransactionHistory.js';
import HomeLoanPage from './Loan.js';
import TransPage from './Transaction.js';
import AccountDetailsPage from './AccountDetailsPage.js';
import ContactPage from './Contact.js';
import TransSuc from './TransSuc.js';
function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<BankingSignUp />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/Nhome' element={<Nhome/>}/>
        <Route path='/Aboutpage' element={<AboutPage/>}></Route>
        <Route path='/Transaction' element={<TransPage/>}></Route>
        <Route path='/Loans' element={<HomeLoanPage/>}></Route>
        <Route path='/TransactionHistory' element={<TransactionPage/>}></Route>
        <Route path='/AccountDetailsPage' element={<AccountDetailsPage/>}></Route>
        <Route path='/ContactPage' element={<ContactPage/>}></Route>
        <Route path='/transsuc' element={<TransSuc/>}></Route>
        
        </Routes>
      </Router>
   
      
          
    </div>
  );
}

export default App;
