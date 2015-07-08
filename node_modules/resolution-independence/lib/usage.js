module.exports = {
	printUsage: function () {
		console.log('');
		console.log('Resolution Independence Conversion Plugin for less.js');
		console.log('To use plugin, see below usage and comma-separate multiple options');
		console.log('\n' +
			'Usage: --resolution-independence[="prop1:val,prop2:val"]\n' +
			'\n' +
			'Options:\n' +
			'  baseSize      The root font-size we wish to use to base all of our conversions upon.        [number]  [default: 24]\n' +
			'  riUnit        The unit of measurement we wish to use for resolution-independent units.      [string]  [default: "rem"]\n' +
			'  unit          The base unit of measurement we wish to convert.                              [string]  [default: "px"]\n' +
			'  absoluteUnit  The unit of measurement to convert 1:1 to our base unit.                      [string]  [default: "apx"]\n' +
			'  minUnitSize   Minimum unit size that any measurement should be converted to.                [number]  [default: 1]\n' +
			'  minSize       The root font-size corresponding to the lowest, supported device resolution.  [number]  [default:: 16]\n' +
			'  precision     How precise our converted measurements will be.                               [number]  [default: 5]\n' +
			'\n');
		console.log('');
	}
};
