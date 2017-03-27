'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const ForRent = db.define('forRent', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = ForRent;
