import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render () {
    return (
      <div id="navbar">
        <h1>The Sophie Group</h1>
        <h3>Building Serious Wealth Over Time</h3>
          <div id="link">
            <Link href={"/home"}>
              Home
            </Link>
          </div>
          <div id="link">
            <Link href={"/buy"}>
              For Sale
            </Link>
          </div>
          <div id="link">
            <Link href={"/rent"}>
              For Rent
            </Link>
          </div>
          <div id="link">
            <Link href={"/contact"}>
              Contact
            </Link>
          </div>
      </div>
    )
  }
}
