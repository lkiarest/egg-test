/**
 * main entry
 */

new Vue({
  el: '#app',
  methods: {
    logout () {
      location.href = '/doLogout'
    }
  }
})
