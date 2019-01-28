const Direction = require('../components/robot/Direction');
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