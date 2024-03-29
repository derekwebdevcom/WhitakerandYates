import React from "react";
import { MDBContainer, MDBIframe } from "mdbreact";

const IframePage = () => {
  return (
    <div className="mb-4">
    <MDBContainer className="text-center mt-0">
      <MDBIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sth!4v1573038369058!5m2!1sen!2sth"/>
    </MDBContainer>
    </div>
  );
}

export default IframePage;