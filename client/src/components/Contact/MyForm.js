import React from "react";
import './Contact.scss';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (

      
      
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/myygpbvz"
        method="POST" className="form-horizontal"
      >
     <input className="form-control" placeholder="What is your name?" type="name" name="name" required="true" />

     <input className="form-control ml-2" placeholder="What is your email?" type="email" name="email" required="true" />

    <textarea rows="4" cols="50" className="form-control" placeholder="Please enter your message or preferred contact method" name="textarea" required="true" ></textarea>

          {status === "SUCCESS" ? <p style={{fontSize:"150%"}} className="text-center text-dark">Thank You!</p> : <button  className="btn btn-outline-dark btn-lg mt-3" type="submit" value="Send">

                     Submit 


    </button> }
    {status === "ERROR" && <p>Ooops! There was an error.</p>}    
      
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}