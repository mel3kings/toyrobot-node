const Direction = require('./Direction');

function isValidRobot(arr) {
    if (null === arr || arr.length !== 3) {
        return false;
    } else if (isNaN(arr[0] || isNaN(arr[1]))) {
        return false;
    }
    let d = Direction[arr[2]];
    if (d === undefined) {
        return false;
    }
    return true;
};


function isValidGrid(arr) {
    if (null === arr || arr.length !== 2) {
        return false;
    } else if (isNaN(arr[0] || isNaN(arr[1]))) {
        return false;
    }
    return true;
}

module.exports = {
    isValidRobot: isValidRobot,
    isValidGrid: isValidGrid
};


