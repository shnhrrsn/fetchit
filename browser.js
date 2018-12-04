const fetchit = require('./src/fetchit.js')
fetchit.fetch = window.fetch.bind(window)
fetchit.qs = require('querystring')

module.exports = fetchit
