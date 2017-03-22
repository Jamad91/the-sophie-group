import React, { Component } from 'react';

export default class Contact extends Component {
  render () {
    return (
      <div>
        <h1 id="title">Contact</h1>
        <div className="container flexbox-container">
          <div className="jumbotron">
            <div className="contactEntry">
              <h3>Chano Rivera</h3>
              <div className="contactImage">
                <img id="chanoPic" src="../../public/assets/profile-user.jpg"></img>
              </div>
              <div className="contactContent">
                <strong>Phone:</strong>
                <p>(631) 835-7293</p>
                <strong>Email:</strong>
                <p>wonderingaround38@yahoo.com</p>
              </div>
            </div>
            <div className="contactEntry">
              <h3>Kelley Rivera</h3>
              <div className="contactImage">
                <img id="chanoPic" src="../../public/assets/profile-user.jpg"></img>
              </div>
              <div className="contactContent">
                <strong>Phone:</strong>
                <p>(631) 835-7293</p>
                <strong>Email:</strong>
                <p>wonderingaround38@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
