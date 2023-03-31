'use strict';


/**
 * Find servers by name
 *
 * name String The name of the server(s) to find
 * returns List
 **/
exports.serversFindGET = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all servers or a single server by id
 *
 * id String The id of the server to get (optional)
 * returns List
 **/
exports.serversGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a server by id
 *
 * id String The id of the server to delete
 * no response value expected for this operation
 **/
exports.serversIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create or update a server
 *
 * server Server The server to create or update
 * returns Server
 **/
exports.serversPUT = function(server) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

