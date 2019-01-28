const Direction = {
    N: {value: "NORTH", right: "E", left: "W"},
    E: {value: "EAST", right: "S", left: "N"},
    W: {value: "WEST", right: "N", left: "S"},
    S: {value: "SOUTH", right: "W", left: "E"},
};


module.exports = Direction;