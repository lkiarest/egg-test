'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.view = {
    mapping: {
      '.html': 'nunjucks',
    },
    defaultViewEngine: 'nunjucks',
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510637407141_8598';

  // add your config here
  config.middleware = [ 'authenticate', 'ua' ];
  config.authenticate = {
    ignore: /(\/doLogin|\/login)/
  }

  config.mysql = {
    client: {
      host: '127.0.0.1',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'hello',
    },
    app: true,
    agent: false,
  };

  return config;
};
