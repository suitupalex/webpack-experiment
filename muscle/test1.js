;(function() {
  'use strict';

  require('../skin/test1.scss');

  var html = require('../skeleton/test1.jade');
  var json = require('./test1.json');

  console.log(json);
  document.body.innerHTML = html() + document.body.innerHTML;
})();
