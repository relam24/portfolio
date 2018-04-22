const express = require('express');
const router = express.Router();
const Projects = require('../models/projects.js');

// Index
router.get('/', (req, res) => {
	Projects.find({}, (err, allProjects) => {
		res.render('index.ejs', {
			Projects: allProjects
		});
	});
});

// new route
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

// show route--must be under new
router.get('/:id', (req, res) => {
	Projects.findById(req.params.id, (err, foundProjects) => {
		res.render('show.ejs', {
			Projects: foundProjects
		});
	});
});

// CREATE post from New
router.post('/', (req, res) => {
	Projects.create(req.body, (err, createdProjects) => {
		res.redirect('/projects');
	});
});

// delete route
router.delete('/:id', (req, res) => {
	Projects.findByIdAndRemove(req.params.id, (err, data) => {
		res.redirect('/projects');
	});
});

module.exports = router;
