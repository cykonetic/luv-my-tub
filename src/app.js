'use strict'

require('dotenv').config()
console.log('document root is ' + process.env.DOCUMENT_ROOT)

const express = require('express')
var app = express()

app.get('/', function(req, res) {
    console.log('document root is ' + process.env.DOCUMENT_ROOT)
    
    res.sendFile('/../html/index.html', {root: process.env.DOCUMENT_ROOT})
})

app.listen(3000, function() {
  console.log('listening on port 3000')
})