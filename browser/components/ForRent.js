import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadForRents } from '../action-creators';
// export default
class ForRent extends Component {

  componentDidMount() {
    // this.props.onLoadForRents
  }

  render () {
    console.log(this.props);
    return (
      <div>
        <h1 id="title">For Rent</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">

            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    forRents: state.forRents
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    onLoadForRents: function () {
      const thunk = loadForRents;
      dispatch(thunk);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForRent)
