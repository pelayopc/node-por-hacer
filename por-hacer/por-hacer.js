const fs = require("fs");

let listadoPorHacer = [];

const guardarDB = () => {
  let data = JSON.stringify(listadoPorHacer);
  fs.writeFile(`./db/data.json`, data, (err) => {
    if (err) throw new Error("Nose puedo grabar", err);
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }

  //console.log(listadoPorHacer);
};

const crear = (descripcion) => {
  let porHacer = {
    descripcion,
    completado: false,
  };
  cargarDB();
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();
  let index = listadoPorHacer.findIndex(
    (tarea) => tarea.descripcion === descripcion
  );
  //console.log(index);
  if (index >= 0) {
    // let listadoAux = [];
    listadoPorHacer = listadoPorHacer.filter(
      (tarea) => tarea.descripcion !== descripcion
    );
    // listadoPorHacer.forEach((element) => {
    //   if (!(element.descripcion === descripcion)) {
    //     console.log("Hola", element.descripcion);
    //     listadoAux.push(element);
    //     console.log(listadoAux);
    //   }
    // });
    // listadoPorHacer = listadoAux;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar,
};
