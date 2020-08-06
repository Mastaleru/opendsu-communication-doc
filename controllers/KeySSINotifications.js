'use strict';

var utils = require('../utils/writer.js');
var KeySSINotifications = require('../service/KeySSINotificationsService');

module.exports.createSubscription = function createSubscription (req, res, next, anchorId, authToken, subscriberId, timeout) {
  KeySSINotifications.createSubscription(anchorId, authToken, subscriberId, timeout)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteSubscription = function deleteSubscription (req, res, next, anchorId, authToken, subscriberId) {
  KeySSINotifications.deleteSubscription(anchorId, authToken, subscriberId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.publishNotification = function publishNotification (req, res, next, anchorId, authToken, notification) {
  KeySSINotifications.publishNotification(anchorId, authToken, notification)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
