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
  .then(() => {res.sendStatus(204)})
  .catch(next)
})

module.exports = router;
