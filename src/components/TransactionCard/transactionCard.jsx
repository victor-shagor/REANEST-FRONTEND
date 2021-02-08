import React from 'react';
import { Status, Transactions } from './styles';

const TransactionCard = ({transactions}) => {
    return (
        <Transactions >
            {transactions && transactions.items.map((transaction) => (
            <div className="trans">
            <img height='100px' src={transaction.image ? transaction.image : 'https://m.economictimes.com/thumb/msid-64230667,width-1200,height-900,resizemode-4,imgsize-28918/mobile-transaction-thinksto.jpg'} alt="trans"/>
            <p className="title"> {transaction.title}</p>
            <p className="cat">{transaction.category}</p>
            <p className="date">{transaction.date}</p>
            <Status status={transaction.status}>{transaction.status}</Status>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            </div>
            ))}
            
        </Transactions>
    );
};

export default TransactionCard;