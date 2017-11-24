'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    // const records = await ctx.service.user.all();
    await ctx.render('index')
  }
}

module.exports = HomeController;
