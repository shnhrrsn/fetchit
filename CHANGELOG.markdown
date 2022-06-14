# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.0.0-beta.5](https://github.com/shnhrrsn/fetchit/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2022-06-14)

## [3.0.0-beta.4](https://github.com/shnhrrsn/fetchit/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2022-06-14)


### 🧪 Refactors

* **node:** stop using deprecated querystring module ([2dc8c0a](https://github.com/shnhrrsn/fetchit/commit/2dc8c0a1628f09c4c751ad3f920dd083d32ac282))


### ✨ Features

* support `URLSearchParams` for `query` and `form` ([e0d44a1](https://github.com/shnhrrsn/fetchit/commit/e0d44a108e3217ffe41c8e1e350d6596ca6680ee))

## 3.0.0-beta.3 (2022-04-16)


### ⚠ BREAKING CHANGES

* **browser:** fetchit will no longer work in older browsers that don’t support URLSearchParams
* fetchit-async has been removed

### ✨ Features

* **browser:** remove URLSearchParams fallback ([c2b6e97](https://github.com/shnhrrsn/fetchit/commit/c2b6e97548803a65b8389ee655e5318f75b12b64))
* add functional access for json/text ([61f921b](https://github.com/shnhrrsn/fetchit/commit/61f921bb2c73208542731abab1d4d63f769ac2ba))


### 🧪 Refactors

* add support for cjs alongside esm ([49e600f](https://github.com/shnhrrsn/fetchit/commit/49e600ff4cdfd8211e797c12c39629f7635da46d))
* convert to esm+jsconfig ([a365335](https://github.com/shnhrrsn/fetchit/commit/a36533532a2eac93153c8c71c83494d0ccd23197))
* typescript rewrite ([d2b55bf](https://github.com/shnhrrsn/fetchit/commit/d2b55bfa81ad9f71d6addfb8fdb6e3259b3ceaed))


### 🐛 Bug Fixes

* remove null coalescing for node 12 ([dc7587f](https://github.com/shnhrrsn/fetchit/commit/dc7587fa047f90d43bb9a18bec7440957d04d676))

# [3.0.0-beta.2](https://github.com/shnhrrsn/fetchit/compare/2.1.0...v3.0.0-beta.2) (2021-04-14)

### ✨ Features

- add functional access for json/text ([61f921b](https://github.com/shnhrrsn/fetchit/commit/61f921bb2c73208542731abab1d4d63f769ac2ba))

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
