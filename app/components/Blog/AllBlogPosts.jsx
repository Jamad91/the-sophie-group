import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForBlogPosts, destroyBlogPost } from '../../action-creators/blog'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
// import AddBlogPostForm from './AddBlogPostForm';

class AllBlogPosts extends Component {
  render() {
    const posts = this.props.blogPosts;
    return(
      <div>
        <h1 id="title">News</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
              {
                posts.map(post => {
                  return (
                    <div key={post.id}>
                      <h1>{post.title}</h1>
                      <p>{post.content}</p>
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return ({
    blogPosts: state.blogPostsReducer.allBlogPosts,
    user: state.auth
  })
}

const mapDispatchToProps = function(dispatch) {
  return {
    destroyBlogPost: (post) => dispatch(destroyBlogPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBlogPosts)
