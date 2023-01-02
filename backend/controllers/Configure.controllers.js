const Configure = require("../models/Configure.model");

module.exports.configureController = {
    createConfigure: async (req, res) => {
        const {
            name,
            description,
            processor,
            motherboard,
            graphics,
            ram,
            ssd,
            hdd,
            compCase,
            power,
            sound,
            os,
            mouse,
            keyboard,
            monitor,
            headset,
            cost
        } = req.body;

        try {
            const configure = await Configure.create({
                name,
                description,
                processor,
                motherboard,
                graphics,
                ram,
                ssd,
                hdd,
                compCase,
                power,
                sound,
                os,
                mouse,
                keyboard,
                monitor,
                headset,
                cost
            });
            return res.status(201).json(configure);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },
    editConfigure: async (req, res) => {
        const {
            name,
            description,
            processor,
            motherboard,
            graphics,
            ram,
            ssd,
            hdd,
            compCase,
            power,
            sound,
            os,
            mouse,
            keyboard,
            monitor,
            headset,
            cost
        } = req.body;

        try {

        } catch (error) {

        }
    },
    getConfigure: async (req, res) => {
        try {
            const configure = await Configure.find();
            return res.json(configure);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },
};
