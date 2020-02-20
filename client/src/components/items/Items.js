import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import vault from "../../img/vault.png";

export default class Items extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  state={
sideDrawerOpen: false
};

drawerToggleClickHandler = () => {
this.setState((prevState) => {
  return {sideDrawerOpen: !prevState.sideDrawerOpen};
});
};
backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
};
  render() {
    let sideDrawer;
    let backdrop;
    
    if (this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div className="container-fluid text-center">
     <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
     {sideDrawer}
     {backdrop}
     <br></br>
     <br></br>
     <br></br>
     <h1>Items</h1>
     <br></br>
     <h3>Genius Takes Time</h3>
            <div className="container">
     <img src='https://derekwebdev.com/images/underconstruction.png' height="30%" width="50%"alt="recipe"/>
     </div>
          </div>
    );
  }
}
