import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createForSale } from 'APP/app/action-creators/forSale'

class ForSaleForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      address1: "",
      address2: "",
      description: "",
      bedroomNum: 0,
      bathroomNum: 0,
      squareFeet: 0,
      mainImageUrl: "",
      extraImageUrls: ""
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
    newState[evt.target.bedroomNum] = evt.target.value
    newState[evt.target.bathroomNum] = evt.target.value
    newState[evt.target.squareFeet] = evt.target.value
    newState[evt.target.mainImageUrl] = evt.target.value
    newState[evt.target.extraImageUrls] = evt.target.value

    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();

    this.props.createForSale(this.state);
    this.setState({
      address1: "",
      address2: "",
      description: "",
      bedroomNum: 0,
      bathroomNum: 0,
      squareFeet: 0,
      mainImageUrl: "",
      extraImageUrls: ""
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
                <input type="text" name="address1" value={this.state.address1} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Address Line 2</span><br />
                <input type="text" name="address2" value={this.state.address2} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Number of bathrooms</span><br />
                <input type="integer" name="bathroomNum" value={this.state.bathroomNum} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Number of bedrooms</span><br />
                <input type="integer" name="bedroomNum" value={this.state.bedroomNum} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Square Footage</span><br />
                <input type="integer" name="squareFeet" value={this.state.squareFeet} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Description</span><br />
                <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Main Image Url</span><br />
                <input type="text" name="mainImageUrl" value={this.state.mainImageUrl} onChange={this.handleChange} />
              </div>
              <div className="form-input">
                <span>Other Image Urls</span><br />
                <span>(seperated with a comma and space)</span><br />
                <input type="text" name="extraImageUrls" value={this.state.extraImageUrls} onChange={this.handleChange} />
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
    {forSale, address1: utils.address1, address2: utils.address2, description: utils.description, images: utils.images}
  )
}

export default connect(mapStateToProps, {createForSale})(ForSaleForm);
