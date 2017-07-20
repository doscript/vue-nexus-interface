import _ from 'lodash'

// const defaultHeader = {
//   'Accept': 'application/json',
//   'Content-Type': 'application/json'
// }

function requestHandle (url, method = 'get', params = {}, query = {}, op = {}) {

}

let res = {
  ajax: requestHandle
}

res = _.assignIn(res, {
  post: function (url, params, op) {
    return res.ajax(url, 'post', params, op)
  },
  get: function (url, query, op) {
    return res.ajax(url, 'get', {}, query, op)
  },
  put: function (url, params, op) {
    return res.ajax(url, 'PUT', params, op)
  },
  patch: function (url, params, op) {
    return res.ajax(url, 'PATCH', params, op)
  },
  delete: function (url, params, op) {
    return res.ajax(url, 'DELETE', params, op)
  },
  create: function (url, params, op) {
    return res.ajax(url, 'post', params, op)
  }
})

export default res
