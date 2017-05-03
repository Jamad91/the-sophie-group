import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createForRent } from 'APP/app/action-creators/forRent'


class ForRentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      address1: "",
      address2: "",
      price: 0,
      description: "",
      bedroomNum: 0,
      bathroomNum: 0,
      squareFeet: 0,
      lotSize: 0,
      features: "",
      mainImageUrl: "",
      extraImageUrls: "",
      zillow: "",
      mls: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let newState = {}


    newState[evt.target.name] = evt.target.value
    newState[evt.target.address1] = evt.target.value
    newState[evt.target.address2] = evt.target.value
    newState[evt.target.price] = evt.target.value
    newState[evt.target.description] = evt.target.value
    newState[evt.target.bedroomNum] = evt.target.value
    newState[evt.target.bathroomNum] = evt.target.value
    newState[evt.target.squareFeet] = evt.target.value
    newState[evt.target.lotSize] = evt.target.value
    newState[evt.target.features] = evt.target.value
    newState[evt.target.mainImageUrl] = evt.target.value
    newState[evt.target.extraImageUrls] = evt.target.value

    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.createForRent(this.state);
    this.setState({
      address1: "",
      address2: "",
      price: 0,
      description: "",
      bedroomNum: 0,
      bathroomNum: 0,
      squareFeet: 0,
      lotSize: 0,
      features: "",
      mainImageUrl: "",
      extraImageUrls: "",
      zillow: "",
      mls: ""
    })
    console.log('SUBMITTED!');
  }

  render() {
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div className="col-lg-12 addpropertyform">
            <form onSubmit={ this.handleSubmit }>
              <h3>ADD A PROPERTY</h3>
              <div className="form-input">
                <span>Address Line 1</span><br />
                <textarea rows="2" cols="50" name="address1" value={this.state.address1} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Address Line 2</span><br />
                <textarea rows="1" cols="50" name="address2" value={this.state.address2} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Price</span><br />
                <textarea rows="1" cols="50" name="price" value={this.state.price} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Description</span><br />
                <textarea rows="5" cols="50" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Number of bathrooms</span><br />
                <textarea rows="1" cols="50" name="bathroomNum" value={this.state.bathroomNum} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Number of bedrooms</span><br />
                <textarea rows="1" cols="50" name="bedroomNum" value={this.state.bedroomNum} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Square Footage</span><br />
                <textarea rows="1" cols="50" name="squareFeet" value={this.state.squareFeet} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Lot Size</span><br />
                <textarea rows="1" cols="50" name="lotSize" value={this.state.lotSize} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Features</span><br />
                <span>(seperated with a comma and space)</span><br />
                <textarea rows="2" cols="50" name="features" value={this.state.features} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Main Image Url</span><br />
                <textarea rows="2" cols="50" name="mainImageUrl" value={this.state.mainImageUrl} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Other Image Urls</span><br />
                <span>(seperated with a comma and space)</span><br />
                <textarea rows="4" cols="50" name="extraImageUrls" onChange={this.handleChange}></textarea>
              </div>
              <div className="form-input">
                <span>Zillow</span><br />
                <textarea rows="2" cols="50" name="zillow" value={this.state.zillow} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>MLS</span><br />
                <textarea rows="2" cols="50" name="mls" value={this.state.mls} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <h3>After hitting submit, refresh page before visiting newly added property.</h3>
                <input type="submit" value="Submit" />
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
    {forRent, address1: utils.address1, address2: utils.address2, bathroomNum: utils.bathroomNum, bedroomNum: utils.bedroomNum, squareFeet: utils.squareFeet, description: utils.description, images: utils.images}
  )
}

export default connect(mapStateToProps, {createForRent})(ForRentForm);
