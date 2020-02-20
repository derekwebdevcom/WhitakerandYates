import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import Navbar from './Navbar/Navbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';



class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push('/');
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
    const { user } = this.props.auth;
    let sideDrawer;
    let backdrop;
    
    if (this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div className="container">
        <div className="row">
          <div className="col">
     <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
     {sideDrawer}
     {backdrop}
              <br></br>
              <br></br>
              <br></br>
              <b>Your Account</b> 
              <p className="flow-text grey-text text-darken-1">
                You are logged in as {user.name}<br></br>Not You?</p>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-outline-dark waves-effect waves-light hoverable accent-3"
            >
              Logout
            </button>
            </div>
            <div className="col">
              <br></br>
              <br></br>
            <b>Your membership status</b>
            <p>Gold Level</p>
            <img src="https://derekwebdev.com/images/goldstar.png" height="15%" width="75%"/>
              <img src="https://derekwebdev.com/images/lionpounce.PNG"/>
              </div>
            </div>
          </div>
          
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
