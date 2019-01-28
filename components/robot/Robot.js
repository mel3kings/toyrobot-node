const Direction = require('./Direction');

function Robot(param) {
    let arr = param.split(" ");
    this.x = arr[0];
    this.y = arr[1];
    this.direction = Direction[arr[2]];
}



Robot.prototype.move = function () {
    console.log("moving robot! " + this.x);
};

Robot.prototype.left = function () {
    this.direction = Direction[this.direction.left];
};

Robot.prototype.right = function () {
    this.direction = Direction[this.direction.right];
};


module.exports = Robot;