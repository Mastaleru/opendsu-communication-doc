'use strict';


/**
 * Retrive the encrypted content of a brick
 *
 * hashLink String 
 * authToken String empty, JWT, oauth, etc.
 * no response value expected for this operation
 **/
exports.getBrick = function(hashLink,authToken) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * stores the encrypted content of a brick
 *
 * tag String can be used to enforce better autorisation
 * authToken String empty, JWT, oauth, etc.
 * no response value expected for this operation
 **/
exports.putBrick = function(tag,authToken) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

