const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();

router.get('/blogs',async(req, res)=>{
    let blogs = await Blog.find().sort({createdAt : -1});
    res.render('index',{
        blogs
    })
})

router.post('/blogs',(req, res)=>{

    let {title, intro, details} = req.body;

    let blogs = new Blog({
        title : title,
        intro : intro, 
        details : details
    })

    blogs.save();

    res.redirect('/');
})

router.get('/add-blog', async(req,res)=>{
    let blog = new Blog ({
        title : "blog title 3",
        intro : "blog intro 3",
        details : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
)

    await blog.save();
    res.send('added new blog');
})

router.get('/blogs/create',(req,res)=>{
    res.render('blogs/create');
    // res.send('create page')
})

router.get('/blogs/:id',async(req, res, next)=>{
    // let blog = await Blog.findById('66cb4efbdda54b8a3f8a2389');
    // res.send(blog);
    try{
        let id = req.params.id;
        let blog = await Blog.findById(id);
        res.render('blogs/show',{
            blog
        })
    }catch(e){
        console.log(e);
        next();
    }
})

router.post('/blogs/delete/:id', async(req, res, next)=>{
    try{
        let id = req.params.id;
        await Blog.findByIdAndDelete(id);
        res.redirect('/');
    }catch(e){
        console.log(e);
        next();
    }
})

module.exports = router;