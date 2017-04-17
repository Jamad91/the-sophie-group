import React, { Component } from 'react';

export default class Contact extends Component {
  render () {
    return (
      <div>
        <h1 id="title">Contact</h1>
        <div className="container flexbox-container">
          <div className="jumbotron contacts">
            <div className="contactEntry">
              <div className="contactImage">
                <img id="chanoPic" src="./assets/profile-user.jpg"></img>
              </div>
              <div className="contactContent">
                <h4><strong>Phone:</strong></h4>
                <p>(631) 835-7293</p>
                <h4><strong>Email:</strong></h4>
                <p>chano.rivera@thesophiegroup.com</p>
              </div>
            </div>
            <div className="contactEntry">
              <div className="contactImage">
                <img id="chanoPic" src="./assets/profile-user.jpg"></img>
              </div>
              <div className="contactContent">
                <h4><strong>Phone:</strong></h4>
                <p>(631) 835-7293</p>
                <h4><strong>Email:</strong></h4>
                <p>kelley.rivera@thesophiegroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
