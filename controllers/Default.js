'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.serversFindGET = function serversFindGET (req, res, next) {
  var name = req.swagger.params['name'].value;
  Default.serversFindGET(name)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversGET = function serversGET (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.serversGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversIdDELETE = function serversIdDELETE (req, res, next) {
  var id = req.swagger.params['id'].value;
  Default.serversIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.serversPUT = function serversPUT (req, res, next) {
  var server = req.swagger.params['server'].value;
  Default.serversPUT(server)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
