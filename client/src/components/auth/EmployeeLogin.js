import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
/* import emplog1 from "../../img/emplog1.png";
import emplog2 from "../../img/emplog2.png"; */
import "./auth.css";
import welcomepage from "../../img/welcomepage.png";

class EmpLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
     
    
    


     
      <div className="container mt-3">
         <div className="text-center">
            <img src={welcomepage} alt="welcome" className="welcomepage" />
            </div>
        
        <div className="row no-pad">
          <div className="col-md-6 offset-md-3">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons col-md-6 offset-md-4">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col-md-6 offset-md-3">
              <h4>
                <b>Employee Login</b> below
              </h4>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="col-md-6 offset-md-3">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email" className="text-center">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col-md-6 offset-md-3">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
               <p className="text-center"><label htmlFor="password" >Password</label></p> 
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="text-center">
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem",
                    marginBottom: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
        

              
              </div>
            </form>
         
            
          </div>
        </div> 
      </div>
   
    );
  }
}

EmpLogin.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(EmpLogin);
