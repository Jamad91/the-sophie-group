'use strict'

const db = require('APP/db');
const ForRent = db.model('forRent')

const router = require('express').Router();

router.get('/', (req, res, next) => {
  ForRent.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

module.exports = router;
