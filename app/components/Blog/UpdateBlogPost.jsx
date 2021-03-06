import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateBlogPost } from 'APP/app/action-creators/blog'

class UpdateBlogPost extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let newState = {}
    newState[evt.target.name] = evt.target.value
    newState[evt.target.title] = evt.target.value
    newState[evt.target.content] = evt.target.value

    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();

    let post = this.props.blogPost.blogPostsReducer.selectedBlogPost

    if(!this.state.title) {
      this.state.title = post.title
    }

    if(!this.state.content) {
      this.state.content = post.content
    }

    this.props.updateBlogPost(this.state);
    this.setState(this.state);
    this.setState({
      title: "",
      content: ""
    })

    console.log('SUBMITTED!');
  }

  render() {
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div className="col-lg-12 addpropertyform">
            <form onSubmit={ this.handleSubmit }>
              <h3>UPDATE THIS POST</h3>
              <div className="form-input">
                <span>Title</span><br />
                <textarea rows="1" cols="50" name="title" value={this.state.title} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Content</span><br />
                <textarea rows="6" cols="50" name="content" value={this.state.content} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (blogPost) {
  return (
    {blogPost}
  )
}

export default connect(mapStateToProps, {updateBlogPost})(UpdateBlogPost);
