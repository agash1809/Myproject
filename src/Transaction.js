import React, { useState } from 'react';
import './Loan.css'; // Import your CSS file

const TransPage = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    // Basic mortgage payment calculation
    const principal = parseFloat(loanAmount);
    const term = parseInt(loanTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    const numerator = principal * rate * Math.pow(1 + rate, term);
    const denominator = Math.pow(1 + rate, term) - 1;

    const monthlyPaymentResult = (numerator / denominator).toFixed(2);
    setMonthlyPayment(monthlyPaymentResult);
  };

  return (
    <div className="home-loan-container">
      <h2>Transaction</h2>

      <div className="form-container">
        <label>
          
          Beneficiary Name:*
          <input
            type="text"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>
        <label>
          
          Beneficiary Account Number:*
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>

        <label>
          Amount:*
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>

        <label>
          Purpose
          <input
            type="text"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        <label>
          MPIN*
          <input
            type="password" required
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>
        

        <button onClick={calculateMonthlyPayment}>Transfer Amount</button>
      </div>


    </div>
  );
};

export default TransPage;
