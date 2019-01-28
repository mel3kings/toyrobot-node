const Robot = require('../components/robot/Robot');
const Grid = require('../components/robot/Grid');
const {moveRobot} = require('../components/robot/RobotController');
const expect = require('chai').expect;


describe('test controller', function () {
    it('should move robot correctly using test case 1', function () {
        let arr = "1 2 N";
        let robot = new Robot(arr);
        let grid = new Grid([5, 5]);
        moveRobot(robot, "LMLMLMLMM", grid);
        expect(robot.getLocation()).to.be.equal("1 3 N");

    });

    it('should move robot correctly using test case 2', function () {
        let arr = "3 3 E";
        let robot = new Robot(arr);
        let grid = new Grid([5, 5]);
        moveRobot(robot, "MMRMMRMRRM", grid);
        expect(robot.getLocation()).to.be.equal("5 1 E");
    });

    it('should test move robot', function () {
        let arr = "0 0 N";
        let robot = new Robot(arr);
        let grid = new Grid([5, 5]);
        moveRobot(robot, "MMRMLMM", grid);
        expect(robot.getLocation()).to.be.equal("1 4 N");

    });

    it('move robot without falling', function () {
        let arr = "0 0 N";
        let robot = new Robot(arr);
        let grid = new Grid([5, 5]);
        moveRobot(robot, "LMMMMMMMM", grid);
        expect(robot.getLocation()).to.be.equal("0 0 W");
    });

    it('move robot without falling NORTH', function () {
        let arr = "0 0 N";
        let robot = new Robot(arr);
        let grid = new Grid([5, 5]);
        moveRobot(robot, "MMMMMMMMMMM", grid);
        expect(robot.getLocation()).to.be.equal("0 5 N");
    });
});