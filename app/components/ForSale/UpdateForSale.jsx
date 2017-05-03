import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForSale } from 'APP/app/action-creators/forSale'

class UpdateForSaleForm extends Component {

  constructor(props) {
    super(props);
    let property = this.props.forSale
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
      mls: "",
      sold: false
    }
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
    newState[evt.target.zillow] = evt.target.value
    newState[evt.target.mls] = evt.target.value
    newState[evt.target.sold] = evt.target.value

    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let property = this.props.forSale

    if(!this.state.address1) {
      this.state.address1 = property.address1
    }
    if(!this.state.address2) {
      this.state.address2 = property.address2
    }
    if(!this.state.price) {
      this.state.price = property.price
    }
    if(!this.state.bathroomNum) {
      this.state.bathroomNum = property.bathroomNum
    }
    if(!this.state.bedroomNum) {
      this.state.bedroomNum = property.bedroomNum
    }
    if(!this.state.squareFeet) {
      this.state.squareFeet = property.squareFeet
    }
    if(!this.state.lotSize) {
      this.state.lotSize = property.lotSize
    }
    if(!this.state.features) {
      this.state.features = property.features
    }
    if(!this.state.description) {
      this.state.description = property.description
    }
    if(!this.state.mainImageUrl) {
      this.state.mainImageUrl = property.mainImageUrl
    }
    if(!this.state.extraImageUrls) {
      this.state.extraImageUrls = property.extraImageUrls
    }
    if(!this.state.zillow) {
      this.state.zillow = property.zillow
    }
    if(!this.state.mls) {
      this.state.mls = property.mls
    }

    this.props.updateForSale(this.props.forSale.id, this.state);
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
      mls: "",
      sold: false
    })
    console.log('SUBMITTED!');
  }


  render() {
    let property = this.props.forSale
    return (
          <div className="col-lg-12 addpropertyform">
            <form onSubmit={ this.handleSubmit }>
              <h3>UPDATE THIS PROPERTY</h3>
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
                <span>Number of bedrooms</span><br />
                <textarea rows="1" cols="50" name="bedroomNum" value={this.state.bedroomNum} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Number of bathrooms</span><br />
                <textarea rows="1" cols="50" name="bathroomNum" value={this.state.bathroomNum} onChange={this.handleChange} />
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
                <span>Sold</span><br />
                <select name="sold"  onChange={this.handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <div className="form-input">
                <h3>After hitting submit, refresh before making more changes</h3>
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
    )
  }
}

function mapStateToProps (state) {
  return (
    {
      forSale: state.forSalesReducer.selectedForSale
    }
  )
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    updateForSale: (propertyId, propertyInfo) => {
      dispatch(updateForSale(propertyId, propertyInfo))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateForSaleForm);
