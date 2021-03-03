#!/usr/bin/env node

'use strict';

// require("babel-register");


const http = require('http');
const utils = require('../servers/utils');

const args = utils.parseArg();

if (args.port) {
    process.env.PORT = args.port;
}

let app = require('../servers/app');
let server = require('http').createServer(app.callback());

server.listen(process.env.PORT || 5000);