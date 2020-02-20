import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Navbar from '../Navbar/Navbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import "./dashboard.css";
import vault from "../../img/vault.png";

class Dashboard extends Component {
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
    const { user } = this.props.auth;
    let sideDrawer;
    let backdrop;
    
    if (this.state.sideDrawerOpen){
      sideDrawer = <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div>
     <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
     {sideDrawer}
     {backdrop}
     <br></br>
     <br></br>
            <div className="container mt-4">
              <b>Hey there,</b> {user.name.split(" ")[0]}
              <p className="flow-text grey-text text-darken-1">
                Welcome to your account</p>
                <div className="row no-pad">
                  <br></br>
                <img src={vault} className="vault rounded mx-auto d-block mt-4" /></div>

            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "0rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-outline-dark waves-effect waves-light hoverable accent-3"
            >
              Logout
            </button>
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
