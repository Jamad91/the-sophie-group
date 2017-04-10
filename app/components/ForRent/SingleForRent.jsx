import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleForRent } from '../../action-creators/forRent';
import ContactRentForm from './ContactRentForm'

class SingleForRent extends Component {
  // constructor (props) {
  //   super(props)
  //   this.handleClick = this.handleClick.bind(this)
  // }
  //
  // handleClick(evt) {
  //   let propertyId = +evt.target.dataset.id
  //   this.props.destroyForRentProperty(propertyId)
  // }

  render() {
    return (
      <div>
        <div className="container flexbox-container">
          <div className="jumbo">
            <h1>yo yo yo</h1>
            {this.props.forRent.address1}
          </div>
        </div>
        <ContactRentForm />
      </div>
    )

  }
}

const mapStateToProps = function(state) {
  return {
    forRent: state.forRentsReducer.selectedForRent
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    onLoadSingleForRent: function () {
      const forRentId = ownProps.params.forRentId;
      const thunk = fetchSingleForRent(forRentId);
      dispatch(thunk);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleForRent);
