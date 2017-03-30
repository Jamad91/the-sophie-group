import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleForRent } from '../../action-creators/forRent';

class SingleForRent extends Component {

  render() {

    console.log('SELECTED RENT', this.props.forRent.title);

    return (
      <div>
        <h1>yo yo yo</h1>
      </div>
    )

  }
}

// <div className="container flexbox-container">
//   <div className="jumbo">
//     {this.props.forRent.title}
//   </div>
// </div>
const mapStateToProps = function(state) {
  console.log('STATE',state);
  return {
    forRent: state.forRentsReducer.selectedForRent
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleForRent: function () {
      console.log('OWNPROPS',ownProps);
      const forRentId = ownProps.params.forRentId
      const thunk = fetchSingleForRent(forRentId);
      dispatch(thunk)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleForRent);
