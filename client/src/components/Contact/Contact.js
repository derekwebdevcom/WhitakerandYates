import React, { Component } from 'react'
import MyForm from './MyForm';
import IframePage from './IframePage';
import Navbar from "../../components/Navbar/Navbar";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <Navbar />
            <div className="row">
    <div className="col-sm-6" style={{marginTop: "12%", marginBottom:"0%"}}>
    
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Do not hesitate to contact us directly. Our team will get back to you
        as soon as possible to help.</p>
    
               <MyForm />
               <div className="align-right text-center">
            <ul className="list-unstyled mb-0">
                <li>
                <img src="https://derekwebdev.com/images/location.png" alt="location" className="location" />
                    <p>85 Flatbush Avenue, NY 11202, USA</p>
                </li>

                <li>
                <img src="https://derekwebdev.com/images/phone.png" alt="phone" className="phone" />
                    <p> 1-800-123-4567</p>
                </li>

                <li>
                <img src="https://derekwebdev.com/images/mail.png" alt="phone" className="phone" />
                    <p>info@WhitakerYates.com</p>
                </li>
            </ul>
        </div>
               </div>
               <div className="col-sm-6 text center pr-3">
            <h3 style={{marginTop: "17%"}} ></h3>


            <div classname="pure-g" >
            <IframePage/>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
