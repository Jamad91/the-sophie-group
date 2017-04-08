'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const ForSale = db.define('forSale', {
  title: {
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

module.exports = ForSale;
