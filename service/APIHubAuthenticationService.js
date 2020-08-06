'use strict';


/**
 * Adds an admin
 *
 * body Body_4  (optional)
 * no response value expected for this operation
 **/
exports.addAdmin = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Adds user in a tag
 *
 * body Body_3  (optional)
 * no response value expected for this operation
 **/
exports.addUserInTag = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Generates an AuthToken
 *
 * expiration BigDecimal number of seconds of validity
 * ssi String PubliSSI of the requesting identity
 * signature String Signature of the requesting identity
 * no response value expected for this operation
 **/
exports.generateAuthToken = function(expiration,ssi,signature) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Remove admin
 *
 * ssi String 
 * signature String 
 * no response value expected for this operation
 **/
exports.removeAdmin = function(ssi,signature) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sets quota for an identity addressed with PublicSSI
 *
 * body Body_1  (optional)
 * no response value expected for this operation
 **/
exports.setQuota = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update of tag policy
 *
 * body Body_2  (optional)
 * no response value expected for this operation
 **/
exports.setTagPolicy = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

