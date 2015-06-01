;(function() {
  'use strict';

  require('../skin/test0.scss');

  var html = require('../skeleton/test0.jade');
  var json = require('./test0.json');

  console.log(json);
  document.body.innerHTML = html() + document.body.innerHTML;
})();
