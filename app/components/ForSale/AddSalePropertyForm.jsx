import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createForSale } from 'APP/app/action-creators/forSale'

class ForSaleForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      images: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let newState = {}

    newState[evt.target.name] = evt.target.value
    newState[evt.target.description] = evt.target.value
    newState[evt.target.images] = evt.target.value

    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.createForSale(this.state);
    this.setState({
      title: '',
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
                <span>Title</span><br />
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
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

function mapStateToProps (forSale, utils) {
  return (
    {forSale, title: utils.title, description: utils.description, images: utils.images}
  )
}

export default connect(mapStateToProps, {createForSale})(ForSaleForm);
