'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const ForRent = db.define('forRent', {
  address1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address2: {
    type: Sequelize.STRING,
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
    type: Sequelize.STRING,
    allowNull: false
  },
  mainImageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  extraImageUrls: {
    type: Sequelize.STRING
  }
})

module.exports = ForRent;
