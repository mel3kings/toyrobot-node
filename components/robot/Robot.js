function Robot(x, y, direction) {
    this.x = x;
    this.y = y;
    this.direction = direction
}

const Direction = {
    N: {value: "NORTH", right: "E", left: "W"},
    E: {value: "EAST", right: "S", left: "N"},
    W: {value: "WEST", right: "N", left: "S"},
    S: {value: "SOUTH", right: "W", left: "E"},
};


Robot.prototype.move = function () {
    console.log("moving robot! " + this.x);
};

Robot.prototype.left = function () {
    console.log("moving left")
};

Robot.prototype.right = function () {
    console.log("moving right");
};


module.exports = {
    Robot: Robot,
    Direction: Direction
};