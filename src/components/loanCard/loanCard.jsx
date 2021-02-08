import React from 'react';
import { Link } from 'react-router-dom';
import { Loan } from './styles';

const LoanCard = ({loan}) => {
    return (
        <Loan>
            <p>{loan && loan.title}</p>
            <Link className='btn' to={loan && loan.cta.link}>{loan && loan.cta.title}</Link>
        </Loan>
    );
};

export default LoanCard;