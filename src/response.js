export class Response {
  constructor (opts, fn) {
    this.headers = {}
    this.callback = fn
    this.statusCode = 200
    this.data = null
    this.error = null
  }
  resolve (data) {
    this.data = data
    this.callback(this)
  }
  reject (error) {
    this.error = error
    this.callback(this)
  }
  getHeader (name) {
    return this.headers[name]
  }
  setHeader (name, value) {
    this.headers[name] = value
  }
  removeHeader (name) {
    delete this.headers[name]
  }
  setStatusCode (val) {
    this.statusCode = val
  }
  getStatusCode () {
    return this.statusCode
  }
}
