'use strict'

const db = require('APP/db');
const ForSale = db.model('forSale')

const router = require('express').Router();

router.get('/', (req, res, next) => {
  ForSale.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  ForSale.findById(req.params.id)
  .then(house => res.json(house))
  .catch(next)
})

module.exports = router;
