const todoRoute = require("express").Router();
const TodoController = require("../controllers/TodoController");

todoRoute.get("/", TodoController.getTodos);
todoRoute.post("/add", TodoController.addTodos);
todoRoute.get("/find/:id", TodoController.findById);
todoRoute.delete("/delete/:id", TodoController.deleteById);
todoRoute.put("/update/:id", TodoController.updateById);

module.exports = todoRoute;
