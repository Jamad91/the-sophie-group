import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForRent } from 'APP/app/action-creators/forRent'

class UpdateForRentForm extends Component {

  constructor(props) {
    super(props);
    let property = this.props.forRent
    this.state = {
      address1: "",
      address2: "",
      description: "",
      bedroomNum: 0,
      bathroomNum: 0,
      squareFeet: 0,
      mainImageUrl: "",
      extraImageUrls: ""
    }
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
    let property = this.props.forRent

    if(!this.state.address1) {
      this.state.address1 = property.address1
    }
    if(!this.state.address2) {
      this.state.address2 = property.address2
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
    if(!this.state.description) {
      this.state.description = property.description
    }
    if(!this.state.mainImageUrl) {
      this.state.mainImageUrl = property.mainImageUrl
    }
    if(!this.state.extraImageUrls) {
      this.state.extraImageUrls = property.extraImageUrls
    }

    this.props.updateForRent(this.props.forRent.id, this.state);
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
    let property = this.props.forRent
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div className="col-lg-12 addpropertyform">
            <form onSubmit={ this.handleSubmit }>
              <h3>UPDATE A PROPERTY</h3>
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

function mapStateToProps (state) {
  return (
    {
      forRent: state.forRentsReducer.selectedForRent
    }
  )
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    updateForRent: (propertyId, propertyInfo) => {
      dispatch(updateForRent(propertyId, propertyInfo))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateForRentForm);
