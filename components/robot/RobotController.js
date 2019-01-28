const Robot = require('./Robot');
const Grid = require('./Grid');
const Validator = require('./Validator');

function executeCommands(input) {
    let i = 1;
    let robot = null;

    while (i < input.length) {
        let command = input[i];
        let robotParams = command.split(" ");
        if (robotParams.length === 3 && Validator.isValidRobot(robotParams)) {
            robot = new Robot(command);
            robot.move();
        } else {
            if (robot === null) {
                console.log("Robot has not been placed ignoring commands");
            } else {
                robot.move();
                robot = null;
            }
        }
        i++;
    }
    console.log("Done, Exiting Program");
}

module.exports = {
    executeCommands: executeCommands
};