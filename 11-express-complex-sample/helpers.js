var json = require('./package.json');

module.exports = {
	getProjectName : function() {
		return json.name;
	},

	getProjectDescription: function() {
		return json.description;
	},

	getProjectVersion : function() {
		return json.version;
	}
};
