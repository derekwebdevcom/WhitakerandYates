import React from 'react';

import '../SideDrawer/DrawerToggleButton';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


const navbar = props =>(
    <header className="navbar pb-2">
        <nav className="navbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}  />
            </div>
            <div className="navbar_logo"><a href="/">Whitaker&Yates</a> </div>
            <div className="spacer"></div>
            <div className="navbar_navigation-items">
                <ul>
                    <li><a href="/dashboard">Home</a></li>
                    <li><a href="/items">Items</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/account">Account</a></li>
                    
                </ul>
            </div>
        </nav>
    </header>
);
export default navbar;