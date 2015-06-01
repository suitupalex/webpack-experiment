(function() {
  'use strict';

  var path = require('path');
  var _ = require('lodash');

  var root = path.dirname(__dirname);
  var muscle = path.join(root, 'muscle');

  var express = require('express');
  var app = express();

  var webpack = require('webpack');
  var compiler = [];

  var tests = _.range(3);

  var webpackCallback = function(test, error, stats) {
    if (error) {
      throw error;
    }

    console.log('Webpack success: test', test);

    if (process.env.DEBUG === 'true') {
      console.log(stats.toJson().errors);
    }
  };

  var expressCallback = function(test, request, response) {
    console.log('Request: test', test);
    response.render('spine', {test: test.toString()});
  };

  _.each(tests, function(test) {
    var filename = ['test', test].join('');

    compiler[test] = webpack({
      module: {
        loaders: [
          {test: /\.js$/, loader: 'uglify'},
          {test: /\.scss$/, loader: 'style!css!sass!csscomb'},
          {test: /\.jade$/, loader: 'jade'},
          {test: /\.json$/, loader: 'json'}
        ]
      },
      entry: path.join(muscle, [filename, '.js'].join('')),
      output: {
        path: path.join(muscle, 'bundle'),
        filename: [filename, '.bundle.js'].join('')
      }
    });

    compiler[test].watch({
      aggregateTimeout: 100,
      poll: true
    }, _.partial(webpackCallback, test));

    app.get(['/', test].join(''), _.partial(expressCallback, test));
  });

  app.locals.basedir = root;

  app.use('/muscle', express.static(muscle));

  app.set('views', path.join(root, 'skeleton'));
  app.set('view engine', 'jade');

  app.get('/', function(request, response) {
    response.redirect(['/', Math.floor(Math.random() * 3)].join(''));
  });

  app.listen(8080, function() {
    console.log(
      'Listening on',
      this.address().address,
      this.address().port
    );
  });
})();
