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
  images: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = ForRent;
