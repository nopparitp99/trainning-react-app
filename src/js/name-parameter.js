// ES5
function request(options) {
    var method = options.method || 'GET'
    var ssl = options.ssl || false
    console.log(method)
  }
  request({})
  
// ES2015
function request({ method='GET', ssl=false }) {
console.log(method)
}
request({})