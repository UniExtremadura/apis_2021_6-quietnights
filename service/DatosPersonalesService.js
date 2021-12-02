'use strict';


/**
 * para dar de alta un usuario en el sistema
 * Se incluyen sus datos en el sistema y se devuelve el objeto creado, incluído su id
 *
 * body DatosPersonales Datos Personales a insertar (optional)
 * returns List
 **/
exports.addDatosPersonales = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "telUsuario" : "34123456789",
  "direccionUsuario" : "Rua del Trece Percebe",
  "idUsuario" : 1,
  "edadUsuario" : 23,
  "nombreUsuario" : "Pedro Garcia"
}, {
  "telUsuario" : "34123456789",
  "direccionUsuario" : "Rua del Trece Percebe",
  "idUsuario" : 1,
  "edadUsuario" : 23,
  "nombreUsuario" : "Pedro Garcia"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * para dar de baja un usuario en el sistema
 * Indicando idUsuario se eliminan sus datos en el sistema
 *
 * idUsuario BigDecimal Id del Usuario
 * no response value expected for this operation
 **/
exports.delDatosPersonales = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * para extraer toda la información de datos personales de un usuario concreto
 * Indicando idUsuario se extraen sus datos personales en el sistema
 *
 * idUsuario BigDecimal Id del Usuario
 * returns List
 **/
exports.getDatosPersonales = function(idUsuario) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "telUsuario" : "34123456789",
  "direccionUsuario" : "Rua del Trece Percebe",
  "idUsuario" : 1,
  "edadUsuario" : 23,
  "nombreUsuario" : "Pedro Garcia"
}, {
  "telUsuario" : "34123456789",
  "direccionUsuario" : "Rua del Trece Percebe",
  "idUsuario" : 1,
  "edadUsuario" : 23,
  "nombreUsuario" : "Pedro Garcia"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * actualiza los datos personales para un usuario concreto
 * Indicando idUsuario se actualizan sus datos personales en el sistema
 *
 * body DatosPersonales Datos Personales a actualizar (optional)
 * idUsuario BigDecimal Id del Usuario
 * no response value expected for this operation
 **/
exports.putDatosPersonales = function(body,idUsuario) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

