const fetchit = require('./src/fetchit.js')
fetchit.fetch = window.fetch
fetchit.qs = require('querystring')

module.exports = fetchit
