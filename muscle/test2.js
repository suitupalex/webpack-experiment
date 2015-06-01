;(function() {
  'use strict';

  require('../skin/test2.scss');

  var html = require('../skeleton/test2.jade');
  var json = require('./test2.json');

  console.log(json);
  document.body.innerHTML = html() + document.body.innerHTML;
})();
