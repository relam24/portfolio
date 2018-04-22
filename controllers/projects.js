const express = require('express');
const router = express.Router();
const Projects = require('../models/projects.js');

// Seed
router.get('/seed', (req, res) => {
	Projects.create([
		{
			name: 'Hogwarts Connect Four',
			img: '/Users/relam/Desktop/dev/Portfolio/public/images/HOGWARTS REAL.png',
			url: 'https://relam24.github.io/Game/'

		}, {
			name: 'RugbyTour',
			img: '/Users/relam/Desktop/dev/Portfolio/public/images/RugbyTour.png',
			url: 'https://rugbytour.herokuapp.com/tournaments'
		}, {
			name: 'Relax And Learn',
			img: '/Users/relam/Desktop/dev/Portfolio/public/images/Relax And Learn.png',
			url: 'https://guitawesome.herokuapp.com/'
		}
	], (err, data) => {
		res.redirect('index.ejs');
	});
});

// Index
router.get('/', (req, res) => {
	Projects.find({}, (err, allProjects) => {
		res.render('index.ejs', {
			Projects: allProjects
		});
	});
});

// new
router.get('/new', (req, res) => {
	res.render('new.ejs');
});

// Show
router.get('/:id', (req, res) => {
	Projects.findById(req.params.id, (err, foundProjects) => {
		res.render('show.ejs', {
			Projects: foundProjects
		});
	});
});

// Create post for new
router.post('/', (req, res) => {
	Projects.create(req.body, (err, createdProjects) => {
		console.log(req.body);
		res.redirect('/projects');
	});
});

// delete route
router.delete('/id', (req, res) => {
	Projects.findById(req.params.id, (err, foundProjects) => {
		res.render('/projects');
	});
});

module.exports = router;
