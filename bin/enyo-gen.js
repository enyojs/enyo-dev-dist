#!/usr/bin/env node

'use strict';

var
	nom = require('nomnom'),
	options = require('../lib/enyo/options'),
	commands = require('../lib/enyo/commands');

nom
	.script('enyo-gen | egen')
	.options(options);

commands.forEach(function (command) {
	nom
		.command(command.name)
		.options(command.options)
		.help(command.help)
		.callback(command.callback);
});

nom.parse();