'use strict'

const db = require('APP/db');
const ForRent = db.model('forRent')

const router = require('express').Router();

router.get('/', (req, res, next) => {
  ForRent.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  ForRent.findById(req.params.id)
  .then(house => res.json(house))
  .catch(next)
  // ForRent.findAll()
  // .then(res.send.bind(res))
  // .catch(next)
})

module.exports = router;
