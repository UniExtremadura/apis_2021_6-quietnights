'use strict';


/**
 * para dar de baja los datos bancarios de un usuario en el sistema
 * Indicando idUsuario se eliminan sus datos bancarios en el sistema
 *
 * idUsuario BigDecimal Id del Usuario
 * no response value expected for this operation
 **/
exports.delDatosBancarios = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * busca los datos bancarios de un usuario concreto
 * Indicando idUsuario, se buscan los datos bancarios para el idUsuario
 *
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.getDatosBancarios = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cuentaUsuario" : "ES00-0000-0000-00-0000000000",
  "titularCuenta" : "Pedro Garcia",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "direccionEntidad" : "Rua del Trece Percebe"
}, {
  "cuentaUsuario" : "ES00-0000-0000-00-0000000000",
  "titularCuenta" : "Pedro Garcia",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "direccionEntidad" : "Rua del Trece Percebe"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * para dar de alta los datos bancarios para un usuario en el sistema
 * Indicando idUsuario se incluyen sus datos bancarios en el sistema
 *
 * body DatosBancarios Datos Bancarios a insertar (optional)
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.postDatosBancarios = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cuentaUsuario" : "ES00-0000-0000-00-0000000000",
  "titularCuenta" : "Pedro Garcia",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "direccionEntidad" : "Rua del Trece Percebe"
}, {
  "cuentaUsuario" : "ES00-0000-0000-00-0000000000",
  "titularCuenta" : "Pedro Garcia",
  "idUsuario" : 1,
  "nombreUsuario" : "Pedro Garcia",
  "direccionEntidad" : "Rua del Trece Percebe"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * actualiza los datos bancarios para el idUsuario
 * actualiza los datos bancarios para el idUsuario
 *
 * body DatosBancarios Datos Bancarios a actualizar (optional)
 * idUsuario BigDecimal Id del Usuario
 * no response value expected for this operation
 **/
exports.putDatosBancarios = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

