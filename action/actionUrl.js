const validUrl = require('valid-url');
const shortId = require('shortid');
const Url = require('../db/models/urlshorter');
const config = require('../config');
const {port}= require('../config');
class UrlShortener{

createShorterUrl = (req,res,next)=>{
    const   baseUrl = config.port;
    const  fullUrl = req.body.fullUrl;
    if(!validUrl.isUri(fullUrl)){
        return res.status(401).json({message:"Url is not valid"});
    }
    const urlCode = shortId.generate();
    Url.findOne({fullUrl}).exec().then(url=>{
    const shortUrl = baseUrl + '/' + urlCode;
    url = new Url({fullUrl,shortUrl,urlCode,date: new Date()});url.save();
        res.status(201).json({url});
    }).catch(err=>{
        return res.status(500).json({error:err})
    })
}
findUrl = async (req,res,next)=>{
    let url;

    url = await Url.findOne({_id:req.params.id}).exec().then(url=>{
   
        return res.redirect(url.fullUrl);
    }).catch(err=>{
        return res.status(500).json({error:err});
    })
    }
}
module.exports = new UrlShortener();