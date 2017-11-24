// default axios config
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config) {
  config.headers = Object.assign(config.headers || {}, {'x-csrf-token': Cookies.get('csrfToken')})
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
