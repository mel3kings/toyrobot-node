const Robot = require('./Robot');
const Grid = require('./Grid');
const Validator = require('./Validator');

function executeCommands(input) {
    let i = 1;
    let robot = null;

    while (i <= input.length) {
        let command = input[i];
        if (command.split(" ").length === 3 && Validator.isValidRobot(command)) {
            robot = new Robot(command);
        } else {
            robot.move();
            robot = null;
        }
        i++;
    }
}

module.exports = {
    executeCommands: executeCommands
};