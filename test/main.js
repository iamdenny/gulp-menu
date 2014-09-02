/*global describe, it*/
"use strict";

var fs = require("fs"),
	es = require("event-stream"),
	should = require("should");

require("mocha");

delete require.cache[require.resolve("../")];

var gutil = require("gulp-util"),
	menu = require("../"),
    gulp = require("gulp");

describe("gulp-menu", function () {

	it("should show up the menu", function (done) {

        gulp.task('menuA', function () {});
        gulp.task('menuB', function () {});
        gulp.task('menuC', function () {});

		menu(gulp);

		setTimeout(function () {
            done();
        }, 500);
	});

});
