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

router.put('/:id', (req, res, next) => {
  ForSale.findById(req.params.id)
  .then(forSale => forSale.update(req.body))
  .then(updated => {
    res.status(201).json(updated).redirect('..')
  })
  .catch(next)
})

router.post('/', (req, res, next) => {
  ForSale.create(req.body)
  .then(forRent => res.status(201).json(forRent))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  ForSale.findById(req.params.id)
  .then(forSale => forSale.destroy())
  .then(destroyedProperty => res.status(204).send(destroyedProperty))
  .catch(next)
})

module.exports = router;
