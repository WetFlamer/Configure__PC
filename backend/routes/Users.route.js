const { usersController } = require("../controllers/Users.controller");
const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/auth.middleware");

router.get("/users", authMiddleware, usersController.getUsers);
router.post("/login", usersController.login);
router.post("/register", usersController.register);

module.exports = router;
