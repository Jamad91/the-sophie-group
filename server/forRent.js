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
})

router.put('/:id', (req, res, next) => {
  ForRent.findById(req.params.id)
  .then(forRent => forRent.update(req.body))
  .then(updated => res.status(201).json(updated))
  .catch(next)
})

router.post('/', (req, res, next) => {
  ForRent.create(req.body)
  .then(forRent => res.status(201).json(forRent))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  ForRent.findById(req.params.id)
  .then(forRent => {
    forRent.destroy()
  })
  .then((destroyedProperty) => {res.status(204).send(destroyedProperty)})
  .catch(next)
})

module.exports = router;
