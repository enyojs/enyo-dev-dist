'use strict';


var
	fs = require('fs-extra'),
	path = require('path'),
	util = require('util');

var
	express = require('express');

var
	Packager = require('../Packager'),
	EventEmitter = require('events').EventEmitter;

var
	defaults = require('./defaults'),
	log = require('../logger'),
	factor = require('./lib/factor-source-stream'),
	source = require('./lib/process-source-stream'),
	assets = require('./lib/process-assets-stream'),
	style = require('./lib/process-style-stream'),
	sort = require('./lib/sort-bundle-stream'),
	pack = require('./lib/pack-bundle-stream'),
	listDeps = require('./lib/list-dependency-stream'),
	bundle = require('./lib/bundle-output-stream');





module.exports = EnyoServer;

function EnyoServer (opts) {
	if (!(this instanceof EnyoServer)) return new EnyoServer(opts);
	
	EventEmitter.call(this);
	
	var
		server = this,
		p = this.packager = new Packager(opts);
	p.once('ready', function () {
		server.options = p.options;
		server._start();
	});
}

util.inherits(EnyoServer, EventEmitter);

EnyoServer.prototype._start = function () {
	
};