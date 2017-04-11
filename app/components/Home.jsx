import React, { Component } from 'react';
// import ImageSlider from './ImageSlider'
import HomeNavbar from './HomeNavbar'

class MainImg extends Component {
  render() {
    return (
      <div id="main_img">
        <img src="./assets/main-house4a.jpg" />
        <h1>Building Serious Wealth Over Time</h1>
      </div>
    )
  }
}

export default class Home extends Component {
  render () {
    return (
      <div>
        <HomeNavbar/>
        <MainImg />
        <h1 id="title">Who We Are</h1>
        <div className="container flexbox-container">
          <div className="jumbotron">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
