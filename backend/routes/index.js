const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));
router.use("/", require("./Categories.route"));
router.use("/", require("./Accessories.route"));

module.exports = router;
