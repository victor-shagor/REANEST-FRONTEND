import React from 'react';
import { Nav } from './styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = ({click}) => {
    return (
        <Nav>
            <FontAwesomeIcon icon='align-right' size='lg' onClick={click}/>
        </Nav>
    );
};

export default NavBar;