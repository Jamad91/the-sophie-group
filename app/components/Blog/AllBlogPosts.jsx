import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForBlogPosts, destroyBlogPost, updateBlogPost } from '../../action-creators/blog'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddBlogPostForm from './AddBlogPostForm';
import UpdateBlogPost from './UpdateBlogPost';
import Footer from '../Footer';

// let updating = false


class AllBlogPosts extends Component {
  constructor (props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick(evt) {
    let blogPostId = +evt.target.dataset.id
    this.props.destroyBlogPost(blogPostId)
  }

  // handleUpdateClick(evt) {
  //   // let blogPostId = +evt.target.dataset.id
  //   // this.props.updateBlogPost(blogPostId)
  //   updating = true
  // }

  render() {
    // console.log('updating', updating);
    const posts = this.props.blogPosts;

    let date;
    let time;
    let message;

    return(
      <div>
        <h1 id="title">News</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
              {
                posts.map(post => {
                  if (post.created_at) {

                    let dateTime = post.created_at.split('T')
                    date = dateTime[0].split('-').reverse()
                    for (var i = 0; i < date.length; i++) {
                      date[i] = parseInt(date[i], 10)
                    }
                    date = `${date[1]}/${date[0]}/${date[2]}`

                    var time = dateTime[1].substr(0, 5).split(':')
                    time[0] = parseInt(time[0], 10)
                    if (time[0] < 4) {
                      time[0] += 24
                    }
                    time[0] -= 4
                    time[0] > 12 ? time[0] = time.push("PM") : time.push("AM")
                    time = `${time[0]}:${time[1]} ${time[2]}`
                    message = `Posted on ${date} at ${time}`
                  }
                  else {
                    message = `Posted just now`
                  }
                  return (
                    <div key={post.title} id="singlePost">
                      <div id="postHeader">
                        <h1>{post.title}</h1>
                        <h4>{message}</h4>
                      </div>
                      <p>{post.content}</p>
                        <div>
                          {this.props.user
                            ? <button className="delete" data-id={post.id} onClick={(e) => this.handleDeleteClick(e)}>Delete</button>
                            : null
                          }
                        </div>
                      <hr />
                    </div>
                  )
                })
              }
              {this.props.user ? <AddBlogPostForm /> : null}

                <Footer />
    
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
    destroyBlogPost: (post) => dispatch(destroyBlogPost(post)),
    updateBlogPost: (post) => dispatch(updateBlogPost(post))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBlogPosts)
