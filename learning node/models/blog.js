const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    title : {
        type : String,
        reqired : true
    },
    intro : {
        type : String,
        reqired : true
    },
    details : {
        type : String,
        required  : true
    }
},{timestamps : true });

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;