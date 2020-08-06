'use strict';

var utils = require('../utils/writer.js');
var BricksLedger = require('../service/BricksLedgerService');

module.exports.addCommand = function addCommand (req, res, next, type) {
  BricksLedger.addCommand(type)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.doAnchor = function doAnchor (req, res, next, hashLink) {
  BricksLedger.doAnchor(hashLink)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.storeCommand = function storeCommand (req, res, next) {
  BricksLedger.storeCommand()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
