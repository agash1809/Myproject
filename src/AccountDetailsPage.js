
import React, { useState } from 'react';
import './AccountDetailsPage.css';

const AccountDetailsPage = () => {
  const [accountDetails, setAccountDetails] = useState({
    accountNumber: '123456789',
    accountHolder: 'John Doe',
    balance: 5000.0,
    currency: 'USD',
    accountType: 'Savings Account',
    lastTransaction: {
      date: '2023-11-28',
      description: 'Deposit',
      amount: 1000.0,
    },
  });

  return (
    <div>
    <h2>Account Details</h2>


    <div className="account-details-container">

      <div className="details-card">
        <div className="detail">
          <span>Account Number:</span>
          <span>{accountDetails.accountNumber}</span>
        </div>
        <div className="detail">
          <span>Account Holder:</span>
          <span>{accountDetails.accountHolder}</span>
        </div>
        <div className="detail">
          <span>Balance:</span>
          <span className={accountDetails.balance < 0 ? 'balance-negative' : 'balance-positive'}>
            {accountDetails.currency} {accountDetails.balance.toFixed(2)}
          </span>
        </div>
        <div className="detail">
          <span>Account Type:</span>
          <span>{accountDetails.accountType}</span>
        </div>
        <div className="detail">
          <span>Last Transaction:</span>
          <span>
            {accountDetails.lastTransaction.date} - {accountDetails.lastTransaction.description} (
            {accountDetails.currency} {accountDetails.lastTransaction.amount.toFixed(2)})
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AccountDetailsPage;

