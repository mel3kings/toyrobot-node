const Direction = require('../components/robot/Direction');
const Robot = require('../components/robot/Robot');
const expect = require('chai').expect;


describe('test Direction', function () {
    it('should instantiate correctly', function () {
        let north = Direction["N"];
        expect(north.value).to.be.equal("NORTH");
        let east = Direction["E"];
        expect(east.value).to.be.equal("EAST");
    });

    it('should  rotate clockwise  correctly', function () {
        let north = Direction["N"];
        let east = Direction[north.right];
        let south = Direction[east.right];
        let west = Direction[south.right];
        expect(west.value).to.be.equal("WEST");
    });


    it('should rotate counter-clockwise correctly', function () {
        let direction = Direction["N"];
        for (var i = 0; i < 3; i++) {
            direction = Direction[direction.left];
        }
        expect(direction.value).to.be.equal("EAST");
    });

    it('unknown values should not be created', function () {
        let direction = Direction["X"];
        expect(direction).to.be.an('undefined');
    });
});

describe('test Moving Robot', function () {
    it('should move north correctly', function () {
        let arr = "0 0 N";
        let robot = new Robot(arr);
        robot.move(5,5);
        expect(robot.y).to.be.equal(1);
    });

    it('should move south correctly', function () {
        let arr = "1 1 S";
        let robot = new Robot(arr);
        robot.move(5,5);
        expect(robot.y).to.be.equal(0);
    });

    it('should move east correctly', function () {
        let arr = "1 1 E";
        let robot = new Robot(arr);
        robot.move(5,5);
        expect(robot.x).to.be.equal(2);
    });

    it('should move west correctly', function () {
        let arr = "1 1 W";
        let robot = new Robot(arr);
        robot.move(5,5);
        expect(robot.x).to.be.equal(0);
    });
});


describe('test Turning Robot', function () {
    it('should move turn left correctly', function () {
        let arr = "0 0 N";
        let robot = new Robot(arr);
        robot.left();
        expect(robot.direction.code).to.be.equal("W");
    });

    it('should move turn right correctly', function () {
        let arr = "0 0 N";
        let robot = new Robot(arr);
        robot.right();
        expect(robot.direction.code).to.be.equal("E");

        robot.right();
        expect(robot.direction.code).to.be.equal("S");

        robot.right();
        expect(robot.direction.code).to.be.equal("W");

        robot.right();
        expect(robot.direction.code).to.be.equal("N");
    });

});



