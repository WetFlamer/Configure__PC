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
            const configure = await Configure.findByIdAndUpdate(req.params.id, {
                name: name,
                description: description,
                processor: processor,
                motherboard: motherboard,
                graphics: graphics,
                ram: ram,
                ssd: ssd,
                hdd: hdd,
                compCase: compCase,
                power: power,
                sound: sound,
                os: os,
                mouse: mouse,
                keyboard: keyboard,
                monitor: monitor,
                headset: headset,
                cost: cost
            })
            return res.status(200).json(configure);
        } catch (error) {
            return res.json({ error: error.message });
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