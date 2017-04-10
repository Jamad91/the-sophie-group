import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForRent } from 'APP/app/action-creators/forRent'


class ForRentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      address1: "",
      address2: "",
      description: "",
      images: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let newState = {}

    newState[evt.target.name] = evt.target.value
    newState[evt.target.address1] = evt.target.value
    newState[evt.target.address2] = evt.target.value
    newState[evt.target.description] = evt.target.value
    newState[evt.target.images] = evt.target.value

    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.createForRent(this.state);
    this.setState({
      address1: '',
      address2: '',
      description: '',
      images: ''
    })
    console.log('SUBMITTED!');
  }

  render() {
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div className="col-md-9 addpropertyform">
            <form onSubmit={ this.handleSubmit }>
              <h3>ADD A PROPERTY</h3>
              <div className="form-input">
                <span>Address Line 1</span><br />
                <input type="text" name="address1" value={this.state.address1} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Address Line 2</span><br />
                <input type="text" name="address2" value={this.state.address2} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Description</span><br />
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Images</span><br />
                <span>(seperated with a comma and space)</span>
                <input type="text" name="images" value={this.state.images} onChange={this.handleChange} />
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

function mapStateToProps (forRent, utils) {
  return (
    {forRent, address1: utils.address1, address2: utils.address2, description: utils.description, images: utils.images}
  )
}

export default connect(mapStateToProps, {createForRent})(ForRentForm);
