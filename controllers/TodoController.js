const { todo } = require("../models");

class TodoController {
	static getTodos(req, res) {
		todo.findAll()
			.then((result) => res.json(result))
			.catch((err) => res.json(err));
	}

	static addTodos(req, res) {
		const { task, status } = req.body;
		todo.create({
			task,
			status,
		})
			.then((result) => {
				if (result) {
					res.json(result);
				} else {
					res.json({ message: "Todo not created!" });
				}
			})
			.catch((err) => res.json(err));
	}

	static findById(req, res) {
		let id = +req.params.id;
		todo.findByPk(id)
			.then((result) => {
				if (result) {
					res.json(result);
				} else {
					res.json({ message: "Todo not found!" });
				}
			})
			.catch((err) => res.json(err));
	}

	static deleteById(req, res) {
		let id = +req.params.id;
		todo.destroy({ where: { id } })
			.then((result) => {
				if (result) {
					res.json(result);
				} else {
					res.json({ message: "Todo not found!" });
				}
			})
			.catch((err) => res.json(err));
	}

	static updateById(req, res) {
		let id = +req.params.id;
		const { task, status } = req.body;
		todo.update({ task, status: Boolean(status) }, { where: { id } })
			.then((result) => {
				if (result) {
					res.json(result);
				} else {
					res.json({ message: "Todo not found!" });
				}
			})
			.catch((err) => res.json(err));
	}
}

module.exports = TodoController;
