const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

/* GET todo lists. */
router.get("/", todoController.get);

/* POST todo list */
router.post("/", todoController.create);

/* PUT todo list */
router.put("/:id", todoController.update);

/* DELETE todo list */
router.delete("/:id", todoController.remove);

module.exports = router;
