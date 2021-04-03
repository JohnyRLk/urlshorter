const express = require('express');
const router = express.Router()

const actionUrl = require('../action/actionUrl');

router.post('/createShortUrl', actionUrl.createShorterUrl);
router.get('/findUrl/:id', actionUrl.findUrl);

module.exports=router;