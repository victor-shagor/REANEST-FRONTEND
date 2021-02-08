import './App.css';
import NavBar from './components/navBar';
import { BrowserRouter } from 'react-router-dom';
import Dashbaord from './pages/dashboard';
import { useState } from 'react';

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <BrowserRouter>
    <NavBar click={()=>setToggle(!toggle)}/>
    <Dashbaord toggle={toggle}/>
    </BrowserRouter>
  );
}

export default App;
