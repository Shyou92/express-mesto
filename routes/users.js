const router = require("express").Router();

const controller = require("../controllers/users");

router.get("/", controller.getUsers);

router.get("/:id", controller.getSingleUser);

module.exports = router;
