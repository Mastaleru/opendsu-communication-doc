'use strict';


/**
 * Publish a new version of the anchor
 *
 * body Body  (optional)
 * no response value expected for this operation
 **/
exports.addAnchor = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates a subscription in order to be notified after a new version of an anchor is available
 *
 * anchorId String 
 * fromVersion String  (optional)
 * authToken String  (optional)
 * subscriberID String  (optional)
 * timeout String  (optional)
 * waitForNonExisting String  (optional)
 * no response value expected for this operation
 **/
exports.createAnchorSubscription = function(anchorId,fromVersion,authToken,subscriberID,timeout,waitForNonExisting) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes the subscription
 *
 * anchorId String 
 * subscriberId String 
 * no response value expected for this operation
 **/
exports.deleteAnchorSubscription = function(anchorId,subscriberId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Retrive all the versions of an anchor
 *
 * anchorId String 
 * authToken String empty, JWT, oauth, etc.
 * no response value expected for this operation
 **/
exports.getVersions = function(anchorId,authToken) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

