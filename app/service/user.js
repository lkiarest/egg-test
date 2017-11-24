'use strict';
const crypto = require('crypto');

function cryptPwd(password) {
  var md5 = crypto.createHash('md5');
  return md5.update(password).digest('hex');
}

module.exports = app => {
  return class UserService extends app.Service {
    async checkLogin(username, pwd) {
      const user = await this.getByName(username)
      app.logger.info('user, %j', user)
      return user && user.pwd === cryptPwd(pwd)
    }

    async getByName(name) {
      return await app.mysql.get('user', { name })
    }
  }
}
