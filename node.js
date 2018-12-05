const fetchit = require('./src/fetchit-async.js')
fetchit.fetch = require('node-fetch')
fetchit.qs = require('querystring')

module.exports = fetchit
