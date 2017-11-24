'use strict';

module.exports = app => {
  app.get('/', app.controller.home.index);
  app.get('/login', app.controller.login.login);
  app.post('/doLogin', app.controller.login.doLogin);
  app.get('/doLogout', app.controller.login.doLogout);
};
