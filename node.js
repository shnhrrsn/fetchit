const fetchit = require('./src/fetchit.js')
fetchit.fetch = require('node-fetch')
fetchit.qs = require('querystring')

module.exports = fetchit
