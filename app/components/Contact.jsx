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
                <img src="./assets/profile-user.jpg"></img>
              </div>
              <div className="contactInfo">
                <h2>Chano Rivera</h2>
                <h4>Phone:</h4>
                <h4>(631) 835-7293</h4>
                <h4>Email:</h4>
                <h4>chano.rivera@thesophiegroup.com</h4>
                <div className="contactBio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              </div>
            </div>
            <br />
            <div className="contactEntry">
              <div className="contactImage">
                <img src="./assets/profile-user.jpg"></img>
              </div>
              <div className="contactInfo">
                <h2>Kelley Rivera</h2>
                <h4>Phone:</h4>
                <h4>(631) 835-7293</h4>
                <h4>Email:</h4>
                <h4>kelley.rivera@thesophiegroup.com</h4>
                <div className="contactBio">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
