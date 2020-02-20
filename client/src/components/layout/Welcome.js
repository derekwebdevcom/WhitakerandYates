import React from 'react'
import furpic from "../../img/furpic.png";
import welcomepage from "../../img/welcomepage.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import "./style.scss";

export default class Welcome extends React.Component {
    constructor(props) {
      super(props);
    }
   render() {
        return (
            /* First picture on the left */
            <div className="container no-pad">
            <div className="row">
            <div className="col">
            <img src={furpic} alt="furpic" className="mt-5 furpic" />
            </div>
            {/* Buttons */}
            <div className="col">
            <Link to="/login" className="btn btn-primary btn-lg btn-block mt-5">Customer</Link>
            <Link to="/employeelogin" className="btn btn-secondary btn-lg btn-block" >Employee</Link>
            <img src={welcomepage} alt="welcome" style={{height:"auto",width:"auto"}} className="align-middle mt-5 welcomepage"/>
            </div>
            </div>
</div>







        )
    }
}
