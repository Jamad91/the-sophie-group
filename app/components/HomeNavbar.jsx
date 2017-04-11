import React, { Component } from 'react';
import { Link } from 'react-router';

export default class HomeNavbar extends Component {
  render () {
    return (
      <div id="home-navbar">
        <div id="company">
          <Link href={"/home"}>
            <h1>The Sophie Group</h1>
        </Link>
        </div>
        <div id="navlinks">
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
