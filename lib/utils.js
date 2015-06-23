'use strict';

var
	util = require('util'),
	path = require('path'),
	os = require('os');

var
	win = os.platform() == 'win32';

var exports = module.exports;

exports.streamError = function (stream) {
	var args = Array.prototype.slice.call(arguments).slice(1);
	stream.emit('error', new Error(util.format.apply(util, args)));
};

// this will work on any path
exports.isAbsolute = function (nom) {
	return path.isAbsolute(nom);
};

// this is specifically designed and used to determine relativity with respect to require statements
// that must use the '.' notation - this is not safe to use in any other context
exports.isRelative = function (nom) {
	// return !path.isAbsolute(nom);
	return nom.charAt(0) == '.';
};

// this is specifically designed and use to determine if the module is a relative file or one that
// needs to be searched for amongst the various paths that can be searched - not safe in any other
// context
exports.isExternal = function (nom) {
	if (!exports.isRelative(nom)) {
		// windows full paths will begin with a drive letter
		if (win) return ! /^[a-zA-Z]:\\/.test(nom);
		// posix standards will begin with forward slash
		else return nom.charAt(0) != '/';
	}
	// if it's relative then it isn't a default lib-level path (doesn't rule out that it is,
	// but that would indicate it was relative from another lib-level module)
	return false;
};

/**
* @temporary
*
* Ultimately this is to be removed and the the whole CLI parser re-written with a tool that better
* supports this secondary need. But for now...
*
* This method formats our input so that we can use subarg (https://github.com/substack/subarg)
* since subarg is not compatible with nomnom. In order to allow it to be free-form like subarg does
* and still use nomnom we simply find those arguments and wrap them as strings so nomnom won't fall
* over and we will then parse them with subarg directly. Unfortunately, it requires us to recreate
* and subsequently parse the command line arguments to ensure that the nested groupings are
* correctly matched.
*/
exports.subargs = function (argv) {
	argv = argv || process.argv.slice(2);
	// this is tricky and made even moreso because node has removed any quotes so we look where they
	// should be and replace them
	if (typeof argv != 'string') argv = argv.map(function (v) { return v.replace(/=((?=[^\s'"]+\s).*$)/g, '="$1"'); }).join(' ');
	argv = argv.match(/\[[^\]]+?\]|[^\s\[=]+?=(?:[^\s'"]+|(['"])[^\1]+?\1)|[^\s]+/g);
	return argv || [];
};







