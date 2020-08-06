'use strict';


/**
 * Request to get notified each time a new anchor of a DSU is successfuly added. This endpoint enables Long Pooling request sequences.
 *
 * anchorId String AnchorId
 * authToken String empty, JWT, oauth, etc.
 * subscriberId String SubscriberId can be empty first time (optional)
 * timeout String Timeout value to keep a notification waiting for the subscriber request. Valid only when subscriberID is empty (optional)
 * no response value expected for this operation
 **/
exports.createSubscription = function(anchorId,authToken,subscriberId,timeout) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete subscription from AnchorId notifications
 *
 * anchorId String AnchorId
 * authToken String empty, JWT, oauth, etc.
 * subscriberId String SubscriberId
 * no response value expected for this operation
 **/
exports.deleteSubscription = function(anchorId,authToken,subscriberId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Publish notifications to a subscribers list identified by AnchorId
 * After a new version is anchored a notification will be sent to those that subscribed using AnchorId.
 *
 * anchorId String Identifier of the subscribers list that needs to get notified
 * authToken String empty, JWT, oauth, etc.
 * notification String notification message
 * no response value expected for this operation
 **/
exports.publishNotification = function(anchorId,authToken,notification) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

