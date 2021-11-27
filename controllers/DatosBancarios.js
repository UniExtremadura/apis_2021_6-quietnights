'use strict';

var utils = require('../utils/writer.js');
var DatosBancarios = require('../service/DatosBancariosService');

module.exports.delDatosBancarios = function delDatosBancarios (req, res, next, idUsuario) {
  DatosBancarios.delDatosBancarios(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDatosBancarios = function getDatosBancarios (req, res, next, idUsuario) {
  DatosBancarios.getDatosBancarios(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postDatosBancarios = function postDatosBancarios (req, res, next, body, idUsuario) {
  DatosBancarios.postDatosBancarios(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDatosBancarios = function putDatosBancarios (req, res, next, body, idUsuario) {
  DatosBancarios.putDatosBancarios(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
