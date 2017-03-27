import React, { Component } from 'react';
import { connect } from 'react-redux';

// export default
export default class ForSale extends Component {
  render () {
    return (
      <div>
        <h1 id="title">For Sale</h1>
          <div className="container flexbox-container">
            <div className="jumbo">
            </div>
          </div>
      </div>
    )
  }
}

// const mapStateToProps = function(state) {
//   return {
//   }
// }
//
// const mapDispatchToProps = function(dispatch) {
//   return {
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(ForSale);
