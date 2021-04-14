# [3.0.0-beta.1](https://github.com/shnhrrsn/fetchit/compare/2.1.0...3.0.0-beta.1) (2020-08-18)

### 🧪 Refactors

- typescript rewrite ([d2b55bf](https://github.com/shnhrrsn/fetchit/commit/d2b55bfa81ad9f71d6addfb8fdb6e3259b3ceaed))

### BREAKING CHANGES

- fetchit-async has been removed

# [2.1.0](https://github.com/shnhrrsn/fetchit/compare/2.0.0...2.1.0) (2018-12-05)

### ✨ Features

- all errors thrown from fetchit should now include a `uri` property and `options` property ([f09f7f5](https://github.com/shnhrrsn/fetchit/commit/f09f7f5cc315037559d50e4d31d35b9d2f527e99))

### 🐛 Bug Fixes

- updated StatusCodeError messages to use statusText if available rather than statusCode ([4cfa7dd](https://github.com/shnhrrsn/fetchit/commit/4cfa7dd93d6e93eb418fa12d592bed01ca4b9ed6))

# [2.0.0](https://github.com/shnhrrsn/fetchit/compare/1.1.0...2.0.0) (2018-12-05)

### ✨ Features

- updated fetchit.json/fetchit.text to expose the json/text response on error objects directly ([ed27d7a](https://github.com/shnhrrsn/fetchit/commit/fa969a0d08b4024e95a62ea3c95a82869524f70f))
- added an async variant of fetchit (default in node) to include better stack traces ([fa969a0](https://github.com/shnhrrsn/fetchit/commit/fa969a0d08b4024e95a62ea3c95a82869524f70f))

### 🐛 Bug Fixes

- removed restriction on node-fetch version ([f7d96ed](https://github.com/shnhrrsn/fetchit/commit/f7d96ed3e9834bb1731be4fd4d139e21960cbfd7))

### 🧪 Refactors

- abstracted build/buildBody out of fetchit ([88fbf2e](https://github.com/shnhrrsn/fetchit/commit/88fbf2ef6281508ffc7dbe5009492eea9632e4b9))

# [1.1.0](https://github.com/shnhrrsn/fetchit/compare/1.0.0...1.1.0) (2018-12-04)

### 🐛 Bug Fixes

- fixed window.fetch not being binded to window ([63fd237](https://github.com/shnhrrsn/fetchit/commit/63fd2374113d56422537eb1dd8e8214001965865))
- updated browser qs to use built in URLSearchParams with a fallback ([e6859cb](https://github.com/shnhrrsn/fetchit/commit/e6859cbcb2ab74acfad00339fc50f29e41d60c02))
- fixed an issue in StatusCodeError for browsers that don’t support Error.captureStackTrace ([8ff8cf6](https://github.com/shnhrrsn/fetchit/commit/8ff8cf66b3713fb2090d90bb4c30a01c2ae72166))

# 1.0.0 (2017-10-17)
