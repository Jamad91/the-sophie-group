'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Blog = db.define('blog', {
  published: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  updated: {
    type: Sequelize.DATE,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
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
