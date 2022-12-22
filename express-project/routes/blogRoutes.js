const express = require('express')

const router = express.Router()

const BlogControllers = require('../controllers/BlogControllers')
const Blog = require('../models/blog')

router.get('/', BlogControllers.blogIndex )

//add post
router.post('/', BlogControllers.blogPost )

//create
router.get('/create', BlogControllers.blogCreate )

//detail
router.get('/:id', BlogControllers.blogDetail )

//delete
router.delete('/:id', BlogControllers.blogDelete )


module.exports = router;