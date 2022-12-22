const Blog = require('../models/blog')

//blog index, create, detals, delete

const blogIndex = (req, res) => {
    Blog.find()
        .then((result) => {
            res.render('index', { title: "All Blogs", blogs: result})
        })
        .catch((err) => { console.log(err) })
}

const blogPost =  (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body)

    blog.save()
        .then( result => { res.redirect('/blogs') })
        .catch( err => console.log(err) )
}

const blogCreate = (req, res) => {
    res.render('create', { title: 'create' })
}

const blogDetail =  ( req, res ) => {
    const id = req.params.id
    Blog.findById(id)
        .then(result => res.render('details', { title: 'Blog detail', blog: result }))
        .catch( err => console.log(err) ) 
}

const blogDelete =  (req, res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then( result => res.json({ redirect: '/blogs'}))
        .catch( err => console.log( err ) )
}

module.exports = {
    blogIndex,
    blogPost,
    blogCreate,
    blogDetail,
    blogDelete
}