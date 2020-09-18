'use strict';


/**
 * Publish a new version of the anchor
 *
 * body Body  (optional)
 * keySSI String keySSI base58
 * no response value expected for this operation
 **/
exports.addAnchor = function(body,keySSI) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates a subscription in order to be notified after a new version of an anchor is available
 *
 * keySSI String 
 * fromVersion String  (optional)
 * authToken String  (optional)
 * subscriberID String  (optional)
 * timeout String  (optional)
 * waitForNonExisting String  (optional)
 * no response value expected for this operation
 **/
exports.createAnchorSubscription = function(keySSI,fromVersion,authToken,subscriberID,timeout,waitForNonExisting) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes the subscription
 *
 * keySSI String 
 * subscriberId String 
 * no response value expected for this operation
 **/
exports.deleteAnchorSubscription = function(keySSI,subscriberId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrive all the versions of an anchor
 *
 * keySSI String keySSI base58
 * authToken String empty, JWT, oauth, etc.
 * no response value expected for this operation
 **/
exports.getVersions = function(keySSI,authToken) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

