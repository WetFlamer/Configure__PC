const { Router } = require("express");

const router = Router();

router.use("/", require("./Users.route"));
router.use("/", require("./Categories.route"));

module.exports = router;
