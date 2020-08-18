<p align="center">
<a href="https://github.com/shnhrrsn/fetchit/actions"><img src="https://github.com/shnhrrsn/fetchit/workflows/test/badge.svg" alt="Build Status"></a>
<a href="https://www.npmjs.com/package/fetchit"><img src="https://img.shields.io/npm/dt/fetchit.svg" alt="Total Downloads"></a>
<a href="https://www.npmjs.com/package/fetchit"><img src="https://img.shields.io/npm/v/fetchit.svg" alt="Latest Version"></a>
<a href="./LICENSE"><img src="https://img.shields.io/npm/l/fetchit.svg" alt="License"></a>
</p>

# fetchit

`fetchit` provides additional utilities for [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) that works in both Node and the browser.

## Installation

### yarn

```bash
yarn add fetchit
```

### npm

```bash
npm install --save fetchit
```

## Documentation

By default, `fetchit` works identically to [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) with the exception that it will throw a [StatusCodeError](src/StatusCodeError.js) for non-200 responses.

In addition to the standard `fetch` API, `fetchit` adds a few extra utilities:

### fetchit.json

`fetchit.json()` accepts the same arguments as `fetch`, but rather than the full response object, it will return a JSON object:

```js
const fetch = require('fetchit')
console.log('result', await fetch.json('https://httpbin.org/anything'))
```

### fetchit.text

`fetchit.text()` accepts the same arguments as `fetch`, but rather than the full response object, it will return the response body as a string:

```js
const fetch = require('fetchit')
console.log('result', await fetch.text('https://httpbin.org/robots.txt'))
```

### options

`fetchit` supports additional `options` beyond what `fetch` provides by default:

#### query

You can pass in a `query` object to be formatted and tacked onto the URL as a query string:

```js
const fetch = require('fetchit')
console.log(
  'result',
  await fetch.json('https://httpbin.org/get', {
    date: Date.now(),
    boolean: true,
    string: 'string',
  }),
)
```

#### form

You can pass in a `form` object and `fetchit` will setup an `application/x-www-form-urlencoded` request body:

```js
const fetch = require('fetchit')
console.log(
  'result',
  await fetch.json('https://httpbin.org/form', {
    method: 'POST',
    form: {
      date: Date.now(),
      boolean: true,
      string: 'string',
    },
  }),
)
```

#### body

If you pass an object to `body`, `fetchit` will setup a `application/json` request body:

```js
const fetch = require('fetchit')
console.log(
  'result',
  await fetch.json('https://httpbin.org/form', {
    method: 'POST',
    body: {
      date: Date.now(),
      boolean: true,
      string: 'string',
    },
  }),
)
```

> Note: If you pass in a `FormData` instance as the value of `body` or you provide a `Content-Type` header, the standard `fetch` behavior will apply for `body`.

#### credentials

Unlike `fetch`, by default, `fetchit` will set [`credentials`](https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials) to `same-origin`.

## License

`fetchit` was created by [Shaun Harrison](https://github.com/shnhrrsn) and is made available under the [MIT license](LICENSE).
