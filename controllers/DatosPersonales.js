'use strict';

var utils = require('../utils/writer.js');
var DatosPersonales = require('../service/DatosPersonalesService');

module.exports.addDatosPersonales = function addDatosPersonales (req, res, next, body) {
  DatosPersonales.addDatosPersonales(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delDatosPersonales = function delDatosPersonales (req, res, next, idUsuario) {
  DatosPersonales.delDatosPersonales(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDatosPersonales = function getDatosPersonales (req, res, next, idUsuario) {
  DatosPersonales.getDatosPersonales(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDatosPersonales = function putDatosPersonales (req, res, next, body, idUsuario) {
  DatosPersonales.putDatosPersonales(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
