# webpack Experiment

This simply experiments with the [webpack API][1] by binding 3 separate bundles,
each with JS, SCSS, Jade, and JSON modules. webpack will also watch for changes
in all the modules if you choose to live edit anything.

The experiment uses express to serve pages with these bundles loaded in.

## Loaders Used
* [CSS][2]
* [CSSComb][3]
* [Jade][4]
* [JSON][5]
* [SASS][6]
* [Style][7]
* [Uglify][8]

## Installation and Run
```bash
git clone https://github.com/suitupalex/webpack-experiment.git
cd webpack-experiment
npm install
node brain/stem.js

# You can also enable more debugging with:
DEBUG=true node brain/stem.js
```

To see the outcome of these bundles, point your browser to
http://localhost:8080. Express will randomly point you to one of three endpoints
(`/0`, `/1`, `/2`).

[1]: http://webpack.github.io/docs/node.js-api.html
[2]: https://github.com/webpack/css-loader
[3]: https://github.com/koistya/csscomb-loader
[4]: https://github.com/webpack/jade-loader
[5]: https://github.com/webpack/json-loader
[6]: https://github.com/jtangelder/sass-loader
[7]: https://github.com/webpack/style-loader
[8]: https://github.com/bestander/uglify-loader

