import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleForRent } from '../../action-creators/forRent';

export default class SingleForRent extends Component {

  render() {

    console.log('SELECTED RENT', this.props);

    return (
      <div>
        <p>yo yo yo</p>
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
  return {
    forRent: state.forRentsReducer.singleForRent
  }
}

const mapDispatchToProps = function(dispatch) {
  return {
    onLoadSingleForRent: function () {
      const thunk = fetchSingleForRent();
      dispatch(thunk)
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(SingleForRent);
