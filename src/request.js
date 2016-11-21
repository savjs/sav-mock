/*
 * @Description     模拟用Request
 * @File       request.js
 * @Auth       jetiny@hfjy.com
 */

export class Request {
  constructor (opts) {
    this.headers = opts.headers || {}
    this.params = opts.data || {}
    this.url = opts.url
    this.method = opts.method
    this._contentType = opts.dataType
  }
  contentType () {
    return this._contentType
  }
}
