const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    fullUrl:{
     type:String,
     required:true
    },
    shortUrl:{
        type:String,
        required:true,
    },
    urlCode:{
        type:String
    },
    date: { type: String, default: Date.now }
 })
 
 
 
 
 
 
 const Url = mongoose.model('Url', UrlSchema);
 module.exports = Url;
