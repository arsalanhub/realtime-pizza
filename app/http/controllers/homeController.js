const Menu = require('../../models/menu')

function homeController() {
	// This is object
	return {
		// index is a key
		async index(req, res) {
            const pizzas = await Menu.find()
			res.render('home', { pizzas: pizzas })
		}
	}
}

module.exports = homeController