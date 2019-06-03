
export class Request {
  constructor (opts) {
    this.headers = opts.headers || {}
    this.params = opts.data || {}
    this.env = opts.env || {}
    this.url = opts.url
    this.method = opts.method
    this._contentType = opts.dataType
  }
  contentType () {
    return this._contentType
  }
}
