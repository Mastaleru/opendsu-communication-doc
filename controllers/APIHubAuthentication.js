'use strict';

var utils = require('../utils/writer.js');
var APIHubAuthentication = require('../service/APIHubAuthenticationService');

module.exports.addAdmin = function addAdmin (req, res, next, body) {
  APIHubAuthentication.addAdmin(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addUserInTag = function addUserInTag (req, res, next, body) {
  APIHubAuthentication.addUserInTag(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateAuthToken = function generateAuthToken (req, res, next, expiration, ssi, signature) {
  APIHubAuthentication.generateAuthToken(expiration, ssi, signature)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeAdmin = function removeAdmin (req, res, next, ssi, signature) {
  APIHubAuthentication.removeAdmin(ssi, signature)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setQuota = function setQuota (req, res, next, body) {
  APIHubAuthentication.setQuota(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.setTagPolicy = function setTagPolicy (req, res, next, body) {
  APIHubAuthentication.setTagPolicy(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
