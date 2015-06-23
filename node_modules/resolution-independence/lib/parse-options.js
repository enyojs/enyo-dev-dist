var re = /([^=]+)=([^=]+)(?:,|$)/g;

module.exports = function (options) {
	var parsedOptions = {};

	options.replace(re, function ($0, $1, $2, $3) {
		parsedOptions[$1] = $2;
	});

	return parsedOptions;
};
