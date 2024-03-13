const route = require("express").Router();

route.get("/", (req, res) => {
	res.send("Hello World!");
});

const todoRoute = require("./todo");
route.use("/todos", todoRoute);

module.exports = route;
