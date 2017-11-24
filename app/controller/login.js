'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login (ctx) {
    if (ctx.session.user) {
      ctx.redirect('/')
    }

    await ctx.render('login')
  }

  async doLogin (ctx) {
    const {username, pwd} = ctx.request.body
    const bLogin = await ctx.service.user.checkLogin(username, pwd)
    if (bLogin) {
      ctx.session.user = await ctx.service.user.getByName(username)
      ctx.body = {isLogin: true}
    } else {
      ctx.body = {isLogin: false, message: '密码错误'}
      ctx.status = 401;
    }
  }

  doLogout (ctx) {
    ctx.session.user = null
    ctx.redirect('/login')
  }
}

module.exports = LoginController;
