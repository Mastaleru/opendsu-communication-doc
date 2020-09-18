'use strict';

var utils = require('../utils/writer.js');
var AnchoringService = require('../service/AnchoringServiceService');

module.exports.addAnchor = function addAnchor (req, res, next, body, keySSI) {
  AnchoringService.addAnchor(body, keySSI)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAnchorSubscription = function createAnchorSubscription (req, res, next, keySSI, fromVersion, authToken, subscriberID, timeout, waitForNonExisting) {
  AnchoringService.createAnchorSubscription(keySSI, fromVersion, authToken, subscriberID, timeout, waitForNonExisting)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAnchorSubscription = function deleteAnchorSubscription (req, res, next, keySSI, subscriberId) {
  AnchoringService.deleteAnchorSubscription(keySSI, subscriberId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVersions = function getVersions (req, res, next, keySSI, authToken) {
  AnchoringService.getVersions(keySSI, authToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
