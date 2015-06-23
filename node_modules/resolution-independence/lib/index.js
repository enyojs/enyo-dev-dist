var getRiPlugin = require('./resolution-independence'),
	usage = require('./usage'),
	parseOptions = require('./parse-options');

function LessPluginRi (options) {
	this.options = options;
}

LessPluginRi.prototype = {
	install: function (less, pluginManager) {
		var RiPlugin = getRiPlugin(less);
		pluginManager.addVisitor(new RiPlugin(this.options));
	},
	printUsage: function () {
		usage.printUsage();
	},
	setOptions: function (options) {
		this.options = parseOptions(options);
	},
	minVersion: [2, 0, 0]
};

module.exports = LessPluginRi;
