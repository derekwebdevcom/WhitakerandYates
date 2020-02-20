import React from 'react';

import './SideDrawer.scss';

const sideDrawer = props =>(




<nav className="side-drawer">
<a></a>
    <ul>
    <img src="https://derekwebdev.com/welcomepage.png" alt="logo" height="70vh" width="55vh" className="rounded mx-auto d-block pt-3"/>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/projects">Items</a></li>
                    <li><a href="/services">Contact</a></li>
                    <li><a href="/contact">Account</a></li>

    </ul>
</nav>

);

export default sideDrawer;
