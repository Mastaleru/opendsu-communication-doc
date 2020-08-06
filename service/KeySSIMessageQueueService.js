'use strict';


/**
 * Creates a new Pub/Sub channel based on AnchorId
 *
 * anchorId String Identifier of the channel
 * ssi String PublicSSI controlling the channel
 * no response value expected for this operation
 **/
exports.createChannel = function(anchorId,ssi) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Request to receive a message from channel identified with AnchorId. Long Pooling mechanism enabled.(if there is no message into channel the request will be kept active until there is a new message or reach timeout value for inactivity)
 *
 * anchorId String Identifier of the channel to which the message need to be delivered
 * authToken String empty, JWT, oauth, etc.
 * controlProof String  (optional)
 * no response value expected for this operation
 **/
exports.receiveMessage = function(anchorId,authToken,controlProof) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Publish a new message into the Pub/Sub channel identified with AnchorId
 *
 * anchorId String Identifier of the channel to which the message need to be delivered
 * authToken String empty, JWT, oauth, etc.
 * no response value expected for this operation
 **/
exports.sendMessage = function(anchorId,authToken) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

