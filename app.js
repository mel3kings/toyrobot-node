const readline = require('readline');
const {executeCommands} = require('./components/robot/RobotController');

let rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let input = [];
rd.setPrompt("Enter robot commands \nTo run: 'CTRL + D' (Mac/Unix) or 'CTRL + Z' + 'Return' (Windows)." +
    " \n");
rd.prompt(true);
rd.on('line', function (line) {
    input.push(line);
});

rd.on('close', function () {
    if (input !== null && input.length > 0) {
        executeCommands(input);
    }
    process.exit(0);
});








