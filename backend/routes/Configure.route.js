const { configureController } = require("../controllers/Configure.controllers");
const { Router } = require("express");
const router = Router();

router.get("/configure", configureController.getConfigure);
router.post("/configure", configureController.createConfigure);

module.exports = router;