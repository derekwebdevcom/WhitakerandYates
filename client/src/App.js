import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import "react-bootstrap";
import Welcome from "./components/layout/Welcome";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import EmpLogin from "./components/auth/EmployeeLogin";
import Account from "./components/Account";
import Contact from "./components/Contact/Contact";
import Items from "./components/items/Items";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Welcome} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/employeelogin" component={EmpLogin} />
        <Switch>         
         <PrivateRoute exact path="/dashboard" component={Dashboard} />
             <Route exact path="/account" component={Account} /> 
             <Route exact path="/contact" component={Contact} /> 
             <Route exact path="/items" component={Items} />
        </Switch>
          
          

          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
