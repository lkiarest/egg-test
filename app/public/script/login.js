(function() {
  new Vue({
    el: '#login-form',
    data: () => ({
      username: '',
      pwd: '',
      message: ''
    }),
    methods: {
      async doLogin () {
        const username = this.username
        const pwd = this.pwd
        if (!username || !pwd) {
          return
        }

        try {
          const ret = await axios.post('/doLogin', {username, pwd})
          location.href = '/'
        } catch ({response}) {
          this.message = response.data.message
        }
      }
    }
  })
})()
