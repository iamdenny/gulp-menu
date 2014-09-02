# gulp-menu
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> menu plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage

First, install `gulp-menu` as a development dependency:

```shell
npm install --save-dev gulp-menu
```

Then, add it to your `gulpfile.js`:

```javascript
var menu = require("gulp-menu");

gulp.task('default', function () {
    menu(this);
});
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2014 NAVER Corp.



[npm-url]: https://npmjs.org/package/gulp-menu
[npm-image]: https://badge.fury.io/js/gulp-menu.png

[travis-url]: http://travis-ci.org/iamdenny/gulp-menu
[travis-image]: https://secure.travis-ci.org/iamdenny/gulp-menu.png?branch=master

[coveralls-url]: https://coveralls.io/r/iamdenny/gulp-menu
[coveralls-image]: https://coveralls.io/repos/iamdenny/gulp-menu/badge.png

[depstat-url]: https://david-dm.org/iamdenny/gulp-menu
[depstat-image]: https://david-dm.org/iamdenny/gulp-menu.png

