import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateForSale } from 'APP/app/action-creators/forSale'
import NotFound from '../NotFound'

class UpdateForSaleForm extends Component {

  constructor(props) {
    super(props);
    let property = this.props.forSale
    // console.log('propserty', property);
    this.state = {
      address1: "",
      address2: "",
      description: "",
      bedroomNum: 0,
      bathroomNum: 0,
      squareFeet: 0,
      mainImageUrl: "",
      extraImageUrls: "",
      sold: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    let newState = {}
    // console.log('so so sos', this.props);

    newState[evt.target.name] = evt.target.value
    newState[evt.target.address1] = evt.target.value
    newState[evt.target.address2] = evt.target.value
    newState[evt.target.description] = evt.target.value
    newState[evt.target.bedroomNum] = evt.target.value
    newState[evt.target.bathroomNum] = evt.target.value
    newState[evt.target.squareFeet] = evt.target.value
    newState[evt.target.mainImageUrl] = evt.target.value
    newState[evt.target.extraImageUrls] = evt.target.value
    newState[evt.target.sold] = evt.target.value

    console.log('sold',this.state.sold);
    console.log('PROPS',this.props);
    this.setState(newState)
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let property = this.props.forSale



    this.props.updateForSale(this.props.forSale.id, );
    this.setState({
      address1: "",
      address2: "",
      description: "",
      bedroomNum: 0,
      bathroomNum: 0,
      squareFeet: 0,
      mainImageUrl: "",
      extraImageUrls: "",
      sold: false
    })
    console.log('SUBMITTED!');
  }


  render() {
    let property = this.props.forSale
    // console.log('property', property);
    // console.log('here here',this.props);
    if (!this.props.user) {return (<NotFound />)}
    return(
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
                <span>Sold</span><br />
                <select name="sold"  onChange={this.handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
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
      forSale: state.forSalesReducer.selectedForSale,
      user: state.auth,
      address1: state.forSalesReducer.selectedForSale.address1,
      address2: state.forSalesReducer.selectedForSale.address2,
      description: state.forSalesReducer.selectedForSale.description,
      images: state.forSalesReducer.selectedForSale.images
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
