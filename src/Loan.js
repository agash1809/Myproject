import React, { useState } from 'react';
import './Loan.css'; // Import your CSS file

const HomeLoanPage = () => {
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
      <h2>Home Loan Calculator</h2>

      <div className="form-container">
        <label>
          Loan Amount ($):
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </label>

        <label>
          Loan Term (years):
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </label>

        <label>
          Interest Rate (%):
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
        </label>

        <button onClick={calculateMonthlyPayment}>Calculate Monthly Payment</button>
      </div>

      {monthlyPayment !== null && (
        <div className="result-container">
          <h3>Monthly Payment:</h3>
          <p className='p'>${monthlyPayment}</p>
        </div>
      )}
    </div>
  );
};

export default HomeLoanPage;
