import React from 'react';
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NameSpan } from './styles';

const Icon = ({prefix}) =>{
return(
    <FontAwesomeIcon icon={prefix.substr(prefix.indexOf('-')+1)}/>
)
}

const SideBarMenu = ({menu}) => {
    
    return (
        <>
        {menu.map(item=>(<NavLink ico className='link' activeClassName='selected' to={item.link}><Icon prefix={item.icon}/><NameSpan>{item.name}</NameSpan></NavLink>))}
        </>
    );
};

export default SideBarMenu;