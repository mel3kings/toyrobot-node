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
    let gridParams = input[0].split(" ");
    if (!utils.isValidGrid(gridParams)) {
        console.log("invalid grid command, please try again");
        process.exit(0);
    } else {
        executeCommands(input);
    }

    process.exit(0);
});












