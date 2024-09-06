const { name } = require('ejs');
const express = require('express');
let mongoose = require('mongoose');
let expressLayouts = require('express-ejs-layouts');
const BlogRoutes = require('./routes/BlogRoutes');


const app = express();

app.use(express.urlencoded({extended : true}));

app.use(express.static('public'));

app.use(BlogRoutes);

//dburl
let mongodburl = "mongodb+srv://aungminoo:aungminoo@test1.sgeuc.mongodb.net/?retryWrites=true&w=majority&appName=test1";

mongoose.connect(mongodburl).then(()=>{
    console.log('mongo db is connected');

    app.listen(3000, ()=>{
        console.log('app is running on port 3000');
    })
}).catch(e => {
    console.log(e);
})

app.set('views','./view');
app.set('view engine','ejs');
app.use(expressLayouts);
app.set('layout','layouts/default');

app.get('/',async(req, res)=>{

    res.redirect('/blogs');
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



