const readline = require('readline');
const utils = require('./components/robot/Validator');
const {executeCommands} = require('./components/robot/RobotController');

let rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let input = [];
rd.setPrompt(" Enter robot commands \n");
rd.prompt(true);
rd.on('line', function (line) {
    input.push(line);
});

rd.on('close', function () {
    executeCommands(input);
    process.exit(0);
});












