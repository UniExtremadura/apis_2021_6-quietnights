'use strict';


/**
 * para dar de alta una facturacion para un usuario en el sistema
 * Se incluye un recibo en el sistema y se devuelve el objeto creado, incluído su id
 *
 * body DatosFacturacion Datos de facturacion a insertar (optional)
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.addDatosFacturacion = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "mesRecibo" : 2,
  "estadoRecibo" : "Emitido",
  "direccionUsuario" : "Rua del Trece Percebe",
  "fechaVencimiento" : "12/12/2021",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "importeRecibo" : 50
}, {
  "mesRecibo" : 2,
  "estadoRecibo" : "Emitido",
  "direccionUsuario" : "Rua del Trece Percebe",
  "fechaVencimiento" : "12/12/2021",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "importeRecibo" : 50
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * para dar de baja un recibo emitido a un usuario en el sistema, para un mes dado
 * Indicando idUsuario se eliminan sus datos de recibo emitido en el sistema
 *
 * idUsuario BigDecimal Id del Usuario
 * no response value expected for this operation
 **/
exports.delDatosFacturacion = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * para extraer toda la información de datos de la facturacion de un usuario concreto
 * Indicando idUsuario se extrae su recibo emitido por el sistema para un mes concreto
 *
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.getDatosFacturacion = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "mesRecibo" : 2,
  "estadoRecibo" : "Emitido",
  "direccionUsuario" : "Rua del Trece Percebe",
  "fechaVencimiento" : "12/12/2021",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "importeRecibo" : 50
}, {
  "mesRecibo" : 2,
  "estadoRecibo" : "Emitido",
  "direccionUsuario" : "Rua del Trece Percebe",
  "fechaVencimiento" : "12/12/2021",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "importeRecibo" : 50
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * actualiza los datos de emitidos de facturacion para un usuario concreto
 * Indicando idUsuario se actualiza su informacion del recibo de facturacion emitido
 *
 * body DatosFacturacion Datos de facturacion a actualizar (optional)
 * idUsuario BigDecimal Id del Usuario
 * no response value expected for this operation
 **/
exports.putDatosFacturacion = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

