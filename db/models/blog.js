'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Blog = db.define('blog', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = ForRent;
