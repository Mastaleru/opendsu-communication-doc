'use strict';

var utils = require('../utils/writer.js');
var BrickStorage = require('../service/BrickStorageService');

module.exports.getBrick = function getBrick (req, res, next, hashLink, authToken) {
  BrickStorage.getBrick(hashLink, authToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putBrick = function putBrick (req, res, next, tag, authToken) {
  BrickStorage.putBrick(tag, authToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
