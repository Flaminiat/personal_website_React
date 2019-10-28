import React from "react";

const Contact = () => {
  return (
    <article id="contact" className="articles contact">
      <h1 className="contact text-center">CONTACT</h1>
      <div>
        <form className="form-group container">
          <label htmlFor="name">Please fill in the fields below</label>
          <div className="form-row">
            <div className="form-group col-md-2 title">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control title"
                id="title"
              ></input>
            </div>
            <div className="form-group col-md-5 firstName">
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                className="form-control firstName"
                id="firstName"
              ></input>
            </div>
            <div className="form-group col-md-5">
              <label htmlFor="surname">Surname</label>
              <input
                type="text"
                className="form-control surname"
                id="surname"
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6 roomId">
              <label htmlFor="e-mail">E-mail</label>
              <input
                type="text"
                className="form-control e-mail"
                id="e-mail"
              ></input>
            </div>
            <div className="form-group col-md-6 phone">
              <label htmlFor="phone-number">Phone number </label>
              <input
                type="text"
                className="form-control phone-number"
                id="phone-number"
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12 message">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control rounded-0"
                id="exampleFormControlTextarea"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="text-center">
                <button className="btn btn-primary col-md-2">Send</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Contact;
