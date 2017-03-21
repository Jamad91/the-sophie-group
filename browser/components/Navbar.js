import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Navbar extends Component {
  render () {
    return (
      <div id="navbar">
        <h1>The Sophie Group</h1>
        <h2>Building Serious Wealth Over Time</h2>
        <Link href={"/buy"}>For Sale</Link>
        <Link href={"/rent"}>For Rent</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    )
  }
}
