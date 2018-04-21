const mongoose = require('mongoose');
const portfolioSchema = new mongoose.Schema({
	name: {type: String, required: true},
	url: {type: String},
	img: {type: String}
});

// collection
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
