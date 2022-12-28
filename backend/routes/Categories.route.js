const {
  categoriesController,
} = require("../controllers/Categories.controller");
const { Router } = require("express");
const router = Router();

router.get("/categories", categoriesController.getCategories);
router.post("/category", categoriesController.createCategory);

module.exports = router;
