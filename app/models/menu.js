const mongoose = require('mongoose')
const Schema = mongoose.Schema

// This is basically a blue print
const menuSchema = new Schema({
	name: { type: String, required: true },
	image: { type: String, required: true },
	price: { type: Number, required: true },
	size: { type: String, required: true },
})

// Model
// Model name is Menu
module.exports = mongoose.model('Menu', menuSchema)