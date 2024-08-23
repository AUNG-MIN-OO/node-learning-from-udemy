const { name } = require('ejs');
const express = require('express');

const app = express();

app.set('views','./view');
app.set('view engine','ejs');

app.get('/',(req, res)=>{

    let blogs = [
        {title : "title 1", blog : "content 1"},
        {title : "title 2", blog : "content 2"},
        {title : "title 3", blog : "content 3"},
    ]

    res.render('index',{
        name : "mg mg",
        age : 21,
        blogs
    });
})

app.get('/about',(req, res)=>{
    res.render('about');
})

app.get('/about-us', (req, res)=>{
    res.redirect('about');
})

app.use((req,res)=>{
    res.status(404).render('404');
})

app.listen(3000, ()=>{
    console.log('app is running on port 3000');
})