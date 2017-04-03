import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForRent } from 'APP/app/action-creators/forRent'


class ForRentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      imageURL: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let newState = {}

    newState[evt.target.name] = evt.target.value
    newState[evt.target.description] = evt.target.value
    newState[evt.target.imageURL] = evt.target.value

    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.createForRent(this.state);
    this.setState({
      title: '',
      description: '',
      imageURL: ''
    })
    console.log('SUBMITTED!');
  }

  render() {
    console.log('FORM', this.props);
    return (
      <div className="container flexbox-container">
        <div className="jumbo">
          <div className="col-md-6 account-left">
            <form onSubmit={ this.handleSubmit }>
              <div className="account-top heading">
                <h3>ADD A PROPERTY</h3>
              </div>
              <div className="address">
                <span>Title</span>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
              </div>
              <div className="address">
                <span>Description</span>
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="address">
                <span>Image Url</span>
                <input type="text" name="imageURL" value={this.state.imageURL} onChange={this.handleChange} />
              </div>
              <div className="address new">
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (forRent, utils) {
  return (
    {forRent, title: utils.title, description: utils.description, imageURL: utils.imageURL}
  )
}

export default connect(mapStateToProps, {createForRent})(ForRentForm);
