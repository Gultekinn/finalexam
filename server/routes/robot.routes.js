const RobotController = require ('../controllers/robot.controller');
const express = require('express')
const robot_routes = express.Router()


// get all robots
robot_routes.get('/', RobotController.getAll);

// get robot by id
robot_routes.get('/:id', RobotController.getById);

// delete robot
robot_routes.delete('/:id', RobotController.delete);

// post robot
robot_routes.post('/', RobotController.post);

// edit robot
robot_routes.put('/:id', RobotController.edit);

module.exports = robot_routes;

