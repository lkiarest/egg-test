'use strict';

module.exports = (options, app) => {
  return function* uaMiddleware(next) {
    yield next;
  };
};
