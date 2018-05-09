const mongoose = require('mongoose');
const projectsSchema = new mongoose.Schema({
	name: {type: String},
	img: {type: String},
	url: {type: String},
	description: {type: String}
});

const Projects = mongoose.model('Projects', projectsSchema);

module.exports = Projects;
