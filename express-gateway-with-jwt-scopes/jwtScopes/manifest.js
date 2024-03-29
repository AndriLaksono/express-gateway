// @ts-check
/// <reference path="./node_modules/express-gateway/index.d.ts" />

const jwtz = require('express-jwt-authz');

/** @type {ExpressGateway.Plugin} */
const plugin = {
  version: '1.0.0',
  //policies: ['apiroot'],
  init: function (pluginContext) {
    console.log("test------")
    pluginContext.registerPolicy({
      name: 'jwtScopes',
      policy: (params) => (req, res, next) => jwtz(req.egContext.apiEndpoint.scopes)(req, res, next)
    })
  }
}

module.exports = plugin;
