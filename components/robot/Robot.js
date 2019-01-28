const Direction = require('./Direction');

function Robot(param) {
    let arr = param.split(" ");
    this.x = parseInt(arr[0]);
    this.y = parseInt(arr[1]);
    this.direction = Direction[arr[2]];
}


Robot.prototype.move = function () {
    switch (this.direction.code) {
        case "N":
            this.y = this.y + 1;
            break;
        case "S":
            this.y = this.y - 1;
            break;
        case "E":
            this.x = this.x + 1;
            break;
        case "W":
            this.x = this.x - 1;
            break;

        default:
            console.log("unknown direction ignoring move command");
    }
    console.log("moving robot! " + this.x);
};

Robot.prototype.left = function () {
    this.direction = Direction[this.direction.left];
};

Robot.prototype.right = function () {
    this.direction = Direction[this.direction.right];
};


module.exports = Robot;