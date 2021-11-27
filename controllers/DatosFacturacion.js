'use strict';

var utils = require('../utils/writer.js');
var DatosFacturacion = require('../service/DatosFacturacionService');

module.exports.addDatosFacturacion = function addDatosFacturacion (req, res, next, body, idUsuario) {
  DatosFacturacion.addDatosFacturacion(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.delDatosFacturacion = function delDatosFacturacion (req, res, next, idUsuario) {
  DatosFacturacion.delDatosFacturacion(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getDatosFacturacion = function getDatosFacturacion (req, res, next, idUsuario) {
  DatosFacturacion.getDatosFacturacion(idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.putDatosFacturacion = function putDatosFacturacion (req, res, next, body, idUsuario) {
  DatosFacturacion.putDatosFacturacion(body, idUsuario)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
