const express = require('express');
const router = express.Router();
const Portfolio = require('../models/portfolio.js');

// Index
router.get('/', (req, res) => {
	Portfolio.find({}, (err, allPortfolio) => {
		res.render('index.ejs', {
			Portfolio: allPortfolio
		});
	});
});

// show route--must be under new
router.get('/:id', (req, res) => {
	Portfolio.findById(req.params.id, (err, foundPortfolio) => {
		res.render('show.ejs', {
			Portfolio: foundPortfolio
		});
	});
});

module.exports = router;
