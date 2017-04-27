'use strict'

const db = require('APP/db');
const Blog = db.model('blog')

const router = require('express').Router();

router.get('/', (req, res, next) => {
  Blog.findAll()
  .then(res.send.bind(res))
  .catch(next)
})

router.get('/:id', (req, res, next) => {
  Blog.findById(req.params.id)
  .then(post => res.json(post))
  .catch(next)
})

router.post('/', (req, res, next) => {
  Blog.create(req.body)
  .then(blog => res.status(201).json(blog))
  .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Blog.findById(req.params.id)
  .then(post => {
    post.destroy()
  })
  .then((destroyedPost) => {res.status(204).send(destroyedPost)})
  .catch(next)
})

module.exports = router;
