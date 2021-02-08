import React from 'react';
import {Wallet }from './styles'
import NumberFormat from 'react-number-format';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WalletCard = ({wallet}) => {
    return (
        <Wallet>
            <div className="topDiv">
                <p>{wallet && wallet.title.toUpperCase()}</p>
                <p>Feb 2 2021</p>
            </div>
            <div className="midDiv">
                <span>{wallet && wallet.balance.title}</span>
                <h2>{<NumberFormat value={wallet && wallet.balance.value} displayType={'text'} thousandSeparator={true} prefix={'$'} />}</h2>
            </div>
            <div className="btmDiv">
                <div className='iconWrapper'>
                <div className='icon'>
                <FontAwesomeIcon icon="money-check"/>
                </div>
                <div>Withdraw</div>  
                </div>
                <div className='iconWrapper'>
                <div className='icon'>
                <FontAwesomeIcon icon='wallet'/>
                </div>
                <div>Fund Wallet</div>
                </div>
                <div className='iconWrapper'>
                <div className='icon'>
                <FontAwesomeIcon icon='file-alt'/>
                </div>
                <div>Transactions</div>
                </div>
                
            </div>
        </Wallet>
    );
};

export default WalletCard;