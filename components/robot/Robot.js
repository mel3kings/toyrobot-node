const Direction = require('./Direction');

function Robot(param) {
    let arr = param.split(" ");
    this.x = parseInt(arr[0]);
    this.y = parseInt(arr[1]);
    this.direction = Direction[arr[2]];
}

Robot.prototype.move = function (gridMaxX, gridMaxY) {
    switch (this.direction.code) {
        case "N":
            if (gridMaxY > this.y) {
                this.y = this.y + 1;
            }
            break;
        case "S":
            if (this.y > 0) {
                this.y = this.y - 1;
            }
            break;
        case "E":
            if (gridMaxX > this.x) {
                this.x = this.x + 1;
            }
            break;
        case "W":
            if (this.x > 0) {
                this.x = this.x - 1;
            }
            break;

        default:
            console.log("unknown direction ignoring move command");
    }
};

Robot.prototype.left = function () {
    this.direction = Direction[this.direction.left];
};

Robot.prototype.right = function () {
    this.direction = Direction[this.direction.right];
};

Robot.prototype.getLocation = function () {
    return this.x + " " + this.y + " " + this.direction.code;
};

module.exports = Robot;