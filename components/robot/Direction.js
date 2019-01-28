const Direction = {
    N: {code: "N", value: "NORTH", right: "E", left: "W"},
    E: {code: "E", value: "EAST", right: "S", left: "N"},
    W: {code: "W", value: "WEST", right: "N", left: "S"},
    S: {code: "S", value: "SOUTH", right: "W", left: "E"},
};


module.exports = Direction;