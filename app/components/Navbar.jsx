import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render () {
    return (
      <div id="navbar">
        <div id="company">
          <h1>The Sophie Group</h1>
        </div>
        <div id="navlinks">
          <div id="link">
            <Link href={"/home"}>
              <p>Home</p>
            </Link>
          </div>
          <div id="link">
            <Link href={"/buy"}>
              <p>Buy</p>
            </Link>
          </div>
          <div id="link">
            <Link href={"/rent"}>
              <p>Rent</p>
            </Link>
          </div>
          <div id="link">
            <Link href={"/contact"}>
              <p>Contact</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
