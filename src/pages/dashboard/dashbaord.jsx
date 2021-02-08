import React,{useState, useEffect} from 'react';
import WalletCard from '../../components/walletCard';
import LoanCard from '../../components/loanCard';
import TransactionCard from '../../components/TransactionCard';
import SideBar from '../../components/sideBar';
import {Wrapper} from './styles'
import {getDashbaord, getMenu} from '../../services/dashbaordService';

const Dashbaord = ({toggle}) => {
    const [dashboard, setDashboard] = useState([]);
    const [menu, setMenu] = useState([]);
    
  useEffect(() => {
    (async () => {
      const { status, data } = await getDashbaord();
      if (status === 200 && data) {
        setDashboard(data);
      }
    })();
    (async () => {
        const {status, data} =  await getMenu();
        if(status === 200 && data){
            setMenu(data)
        }
      })();
  }, []);
    return (
    <Wrapper toggle={toggle}>
    <div className='side'>
    <SideBar profile={dashboard.user} menu={menu} toggle={toggle}/>
    </div>
    <div className='main'>
      <div className='upperDiv'>
    <WalletCard wallet={dashboard.wallet}/>
    <LoanCard loan={dashboard.loan}/>
    </div>
    <TransactionCard transactions={dashboard.transactions}/>
    </div>
    </Wrapper>
    );
};

export default Dashbaord;