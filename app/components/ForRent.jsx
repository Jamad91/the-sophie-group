import React, { Component } from 'react';
import { connect } from 'react-redux';
// export default
class ForRent extends Component {

  componentDidMount() {
    // this.props.onLoadForRents
  }

  render () {
    console.log(this.props);
    const properties = this.props.forRents

    return (
      <div>
        <h1 id="title">For Rent</h1>
          <div className="container flexbox-container">
            <div className="jumbo">
              {
                properties.map(property => {
                  return (
                    <div key={property.title} className="propertyEntry">
                      <div className="propertyImage">
                        <img src={property.image}></img>
                      </div>
                      <div className="propertyName">
                        <h3>{property.title}</h3>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForRent)
