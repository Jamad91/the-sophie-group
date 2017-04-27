import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchAllForRents, destroyForRentProperty } from '../../action-creators/forRent'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
// import AddBlogPostForm from './AddBlogPostForm';

export default class AllBlogPosts extends Component {
  render() {
    return(
      <div>
        <h1 id="title">News</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
            </div>
        </div>
      </div>
    )
  }
}
