import React from 'react';
import ProfileCard from '../profileCard/profileCard';
import SideBarMenu from './sideBarMenu';
import { SideBarStyles } from './styles';

const SideBar = ({profile, menu, toggle}) => {
    console.log(toggle)
    return (
<>
        <SideBarStyles toggle={toggle}>
        <ProfileCard profile={profile}/>
            <SideBarMenu menu={menu}/>
        </SideBarStyles>
        </>
    );
};

export default SideBar;