let validator = require('../components/robot/Validator');
let expect = require('chai').expect;


describe('isValidGrid()', function () {
    it('should accept valid params', function () {
        let arr = [1, 1];
        let valid = validator.isValidGrid(arr)
        expect(valid).to.be.equal(true);
    });

    it('should return false on NAN params', function () {
        let arr = ['asdf', 1];
        let valid = validator.isValidGrid(arr)
        expect(valid).to.be.equal(false);
    });

    it('should return false on missing params', function () {
        let arr = [1];
        let valid = validator.isValidGrid(arr)
        expect(valid).to.be.equal(false);
    });

    it('should return false on no params', function () {
        let arr = null;
        let valid = validator.isValidGrid(arr)
        expect(valid).to.be.equal(false);
    });
});

describe('isValidrobot()', function () {
    it('should accept valid params', function () {
        let arr = [1, 1, "N"];
        let valid = validator.isValidRobot(arr)
        expect(valid).to.be.equal(true);
    });

    it('should not accept invalid directions', function () {
        let arr = [1, 1, "X"];
        let valid = validator.isValidRobot(arr)
        expect(valid).to.be.equal(false);
    });

    it('should not accept invalid coordinates', function () {
        let arr = ["X", 99, "E"];
        let valid = validator.isValidRobot(arr)
        expect(valid).to.be.equal(false);
    });

    it('should not accept missing params', function () {
        let arr = [99, 99];
        let valid = validator.isValidRobot(arr)
        expect(valid).to.be.equal(false);
    });

    it('should not accept null params', function () {
        let arr = null;
        let valid = validator.isValidRobot(arr)
        expect(valid).to.be.equal(false);
    });
});





