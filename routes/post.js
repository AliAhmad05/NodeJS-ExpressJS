const express = require('express')
//const postController = require('../controllers/post')
const { getPosts, createPost } = require('../controllers/post')
const validator = require('../validator')

const router = express.Router()

router.get('/', getPosts)
router.post('/post', validator.createPostValidator, createPost)
router.get('/get', getPosts)

module.exports = router
