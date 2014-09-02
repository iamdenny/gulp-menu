var inquirer = require("inquirer");

module.exports = function (gulp) {
	"use strict";

    var choices = [];

    for (var key in gulp.tasks) {
        if (gulp.tasks.hasOwnProperty(key)){
            choices.push(key);
        }
    }
    choices.push("exit");
    var question = {
        type: "list",
        name: "gulp",
        message: "What do you want to do?",
        choices: choices
    };

    setTimeout(function () {
        inquirer.prompt([question], function( answers ) {
            gulp.start(answers.gulp);
        });
    });

};