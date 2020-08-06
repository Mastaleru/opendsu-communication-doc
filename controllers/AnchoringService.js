'use strict';

var utils = require('../utils/writer.js');
var AnchoringService = require('../service/AnchoringServiceService');

module.exports.addAnchor = function addAnchor (req, res, next, body) {
  AnchoringService.addAnchor(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAnchorSubscription = function createAnchorSubscription (req, res, next, anchorId, fromVersion, authToken, subscriberID, timeout, waitForNonExisting) {
  AnchoringService.createAnchorSubscription(anchorId, fromVersion, authToken, subscriberID, timeout, waitForNonExisting)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAnchorSubscription = function deleteAnchorSubscription (req, res, next, anchorId, subscriberId) {
  AnchoringService.deleteAnchorSubscription(anchorId, subscriberId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVersions = function getVersions (req, res, next, anchorId, authToken) {
  AnchoringService.getVersions(anchorId, authToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
