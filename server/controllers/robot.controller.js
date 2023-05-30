const RobotModel = require('../models/robot.model')

const RobotController = {
    getAll: async (req, res) => {
        const { name } = req.query;
        const robots = await RobotModel.find();
        if (name === undefined) {
            res.status(200).send({
                data: robots,
                message: "Data get success!",
            });
        } else {
            res.status(200).send({
                data: moneys.filter((x) =>
                    x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
                ),
                message: "Data get success!",
            });
        }
    },

    getById: async (req, res) => {
        const id = req.params.id;
        const robot = await RobotModel.findById(id);
        console.log("Robot found", robot);
        if (!robot) {
            res.status(200).send("Data not found!")
        } else {
            res.status(200).send({
                data: robot,
                message: "Data get success!",
            });
        }
    },

    delete: async (req, res) => {
        const id = req.params.id;
        const robot = await RobotModel.findByIdAndDelete(id);
        if (robot === undefined) {
            res.status(404).send("Robot not found!");
        } else {
            res.status(201).send({
                data: robot,
                message: "Data deleted successfully!",
            });
        }
    },

    post: async (req, res) => {
        const { name, desc, imageURL } = req.body;
        const newRobot = new RobotModel({
            name: name,
            desc: desc,
            imageURL: imageURL,
        });
        await newRobot.save();
        res.status(201).send("Created")
    },

    edit: async (req, res) => {
        const id = req.params.id;
        const { name, desc, imageURL } = req.body;
        const existedRobot = await RobotModel.findByIdAndUpdate(id);
        if (existedRobot == undefined) {
            res.status(404).send("Robot not found!");
        } else {
            res.status(200).send({
                name: name,
                desc: desc,
                imageURL: imageURL,
            });
        }
    }
};



module.exports = RobotController;


