import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {fetchSingleForSale} from '../../action-creators/forSale'
import { fetchSingleForSale, updateForSale } from 'APP/app/action-creators/forSale'
import NotFound from '../NotFound'

class UpdateForSaleForm extends Component {

  constructor(props) {
    super(props);
    let property = this.props.forSale
    console.log('props', property);
    this.state = {
      address1: property.address1,
      address2: property.address2,
      description: property.description,
      bedroomNum: property.bedroomNum,
      bathroomNum: property.bathroomNum,
      squareFeet: property.squareFeet,
      mainImageUrl: property.mainImageUrl,
      extraImageUrls: property.extraImageUrls,
      sold: property.sold
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

    this.props.updateForSale(this.state);
    this.setState({
      address1: property.address1,
      address2: property.address2,
      description: property.description,
      bedroomNum: property.bedroomNum,
      bathroomNum: property.bathroomNum,
      squareFeet: property.squareFeet,
      mainImageUrl: property.mainImageUrl,
      extraImageUrls: property.extraImageUrls,
      sold: property.sold
    })
    console.log('SUBMITTED!');
  }


  render() {
    let property = this.props.forSale
    console.log('here here',property);
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
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, utils) {
  console.log('STATE', state);
  return (
    {
      forSale: state.forSalesReducer.selectedForSale,
      user: state.auth,
      address1: utils.address1,
      address2: utils.address2,
      description: utils.description,
      images: utils.images}
  )
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleForSale: function() {
      const forSaleId = ownProps.param.forSaleId;
      const thunk = fetchSingleForSale(forSaleId);
      dispatch(thunk)
    },
    updateForSale
  }
}


export default connect(mapStateToProps, {mapDispatchToProps})(UpdateForSaleForm);



// <div className="container flexbox-container">
//   <div className="jumbotron">
//     <h1>UPDATE PROPERTY</h1>
//     <span>Address Line 1: {property.address1}</span><button>Edit</button><br />
//     <span>Address Line 2: {property.address2}</span><button>Edit</button><br />
//     <span>Bathroom Number: {property.bathroomNum}</span><button>Edit</button><br />
//     <span>Bedroom Number: {property.bedroomNum}</span><button>Edit</button><br />
//     <span>Square Feet: {property.squareFeet}</span><button>Edit</button><br />
//     <span>Main Image URL: {property.mainImageUrl}</span><button>Edit</button><br />
//     <span>Other Image URLs: {property.extraImageUrls}<button>Edit</button></span><br />
//     <span>Sold: {!property.sold ? "No" : "Yes"}<button>Edit</button></span>
//   </div>
// </div>
// const mapStateToProps = function(state) {
//   return {
//     forSale: state.forSalesReducer.selectedForSale,
//     user: state.auth
//   }
// }
//
// const mapDispatchToProps = function(dispatch, ownProps) {
//   return {
//     onLoadSingleForSale: function() {
//       const forSaleId = ownProps.param.forSaleId;
//       const thunk = fetchSingleForSale(forSaleId);
//       dispatch(thunk)
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(UpdateForSale);
