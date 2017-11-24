'use strict';

/**
 * 用户登陆验证中间件，用来拦截未登陆用户访问需要登陆权限的资源
 */
module.exports = (options, app) => {
  return async function auth(ctx, next) {
    app.logger.debug('request %j', ctx.request)
    const user = ctx.session.user
    if (!user) {
      const isAjax = ctx.headers['X-Requested-With'] === 'XMLHttpRequest'
      if (isAjax) {
        ctx.status = 401
        ctx.body = {isLogin: false, message: '尚未登录'}
      } else {
        await ctx.redirect('/login')
      }

      return
    }

    await next()
  }
}
