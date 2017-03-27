import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render () {
    return (
      <div id="navbar">
        <h1>The Sophie Group</h1>
        <h3>Building Serious Wealth Over Time</h3>
        <Link href={"/home"}>
          <div id="link">
            Home
          </div>
        </Link>
        <Link href={"/buy"}>
          <div id="link">
            For Sale
          </div>
        </Link>
        <Link href={"/rent"}>
          <div id="link">
            For Rent
          </div>
        </Link>
        <Link href={"/contact"}>
          <div id="link">
            Contact
          </div>
        </Link>
      </div>
    )
  }
}
