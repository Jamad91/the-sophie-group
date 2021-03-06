'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const ForSale = db.define('forSale', {
  address1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  bedroomNum: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  bathroomNum: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  squareFeet: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  lotSize: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  features: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mainImageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  extraImageUrls: {
    type: Sequelize.STRING
  },
  sold: {
    type: Sequelize.BOOLEAN,
    defualtValue: false
  },
  zillow: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mls: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = ForSale;
