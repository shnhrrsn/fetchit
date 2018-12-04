const fetchit = require('./src/fetchit.js')
fetchit.fetch = window.fetch.bind(window)
fetchit.qs = require('./src/browser/qs')

module.exports = fetchit
