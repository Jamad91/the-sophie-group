import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllForRents, destroyForSaleProperty } from '../../action-creators/forSale'
import { WhoAmI } from '../WhoAmI';
import { Link } from 'react-router';
import AddSalePropertyForm from './AddSalePropertyForm';

class AllForSale extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(evt) {
    let propertyId = +evt.target.dataset.id
    this.props.destroyForSaleProperty(propertyId)
  }


  render () {
    const properties = this.props.forSales;
    const user = this.props.user;

    return (
      <div>
        <h1 id="title">For Sale</h1>
          <div className="container flexbox-container">
            <div className="jumbotron">
              {
                properties.map(property => {
                  var images = property.images.split(', ');
                  return (
                    <div key={property.title} className="propertyEntry">
                      <Link href={`/buy/${property.id}`}>
                        <div className="propertyImage">
                          <img src={images[0]}></img>
                        </div>
                        <div className="propertyName">
                          <h3>{property.title}</h3>
                        </div>
                      </Link>
                      <div>
                        {user
                          ? <div className="delete" data-id={property.id} onClick={(e) => this.handleClick(e)}>X</div>
                          : null
                        }
                      </div>
                    </div>
                  )
                })
              }
              <div>
                {user ? <AddSalePropertyForm /> : null}
              </div>
            </div>

          </div>
      </div>
    )
  }

}

const mapStateToProps = function(state) {
  return ({
    forSales: state.forSalesReducer.allForSales,
    user: state.auth
  })
}

const mapDispatchToProps = function(dispatch) {
  return {
    destroyForSaleProperty: (property) => dispatch(destroyForSaleProperty(property))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllForSale);
