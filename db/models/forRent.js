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
  mainImageUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  extraImageUrls: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = ForRent;
