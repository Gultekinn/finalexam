const mongoose = require('mongoose');

// Robot Model
const RobotModel = mongoose.model('Robot', new mongoose.Schema({
    name: String,
    desc: String,
    imageURL: String,
}));

module.exports = RobotModel;
