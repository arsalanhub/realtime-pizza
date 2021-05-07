function cartController() {
	// This is object
	return {
		index(req, res) {
           res.render('customers/cart')
		}
	}
}

module.exports = cartController