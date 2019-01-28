const Robot = require('./Robot');
const Grid = require('./Grid');
const Validator = require('./Validator');

function executeCommands(input) {
    let grid = null;
    let gridParams = input[0].split(" ");
    if (!Validator.isValidGrid(gridParams)) {
        console.log("invalid grid command, please try again");
        process.exit(0);
    } else {
        grid = new Grid(gridParams);
    }
    let robots = [];
    let robot = null;
    let i = 1;
    while (i < input.length) {
        let command = input[i];
        let robotParams = command.split(" ");
        if (robotParams.length === 3 && Validator.isValidRobot(robotParams)) {
            robot = new Robot(command);
        } else {
            if (robot === null) {
                console.log("Robot has not been initialized correctly, ignoring commands");
            } else {
                moveRobot(robot, command, grid);
                robots.push(robot);
                robot = null;
            }
        }
        i++;
    }
    reportRobots(robots);
    console.log("Done, Exiting Program");
}

function moveRobot(robot, command, grid) {
    let movement = command.split("");
    for (let i = 0; i < movement.length; i++) {
        let move = movement[i];
        switch (move) {
            case "L":
                robot.left();
                break;
            case "R":
                robot.right();
                break;
            case "M":
                robot.move(grid.x, grid.y);
                break;
            default: //ignoring unknown;
        }
    }
}

function reportRobots(robots) {
    for (let i = 0; i < robots.length; i++) {
        let robot = robots[i];
        console.log(robot.getLocation());
    }
}

module.exports = {
    executeCommands: executeCommands,
    moveRobot: moveRobot
};