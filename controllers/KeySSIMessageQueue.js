'use strict';

var utils = require('../utils/writer.js');
var KeySSIMessageQueue = require('../service/KeySSIMessageQueueService');

module.exports.createChannel = function createChannel (req, res, next, anchorId, ssi) {
  KeySSIMessageQueue.createChannel(anchorId, ssi)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.receiveMessage = function receiveMessage (req, res, next, anchorId, authToken, controlProof) {
  KeySSIMessageQueue.receiveMessage(anchorId, authToken, controlProof)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendMessage = function sendMessage (req, res, next, anchorId, authToken) {
  KeySSIMessageQueue.sendMessage(anchorId, authToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
