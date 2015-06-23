'use strict';

var
	Packager = require('./lib/Packager'),
	Watcher = require('./lib/Watcher');

/**
* Package an Enyo 2.6+ application based on the provided options.
*/
exports.package = function (opts) {
	opts = opts || {};
	if (opts.watch) return new Watcher(opts);
	else return new Packager(opts).run();
};