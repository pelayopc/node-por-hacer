const descripcion = {
  demand: true,
  alias: "d",
  desc: "Descripción de la tarea",
};

const completado = {
  alias: "c",
  default: true,
  desc: "Marca como completado/pendiente",
};

const argv = require("yargs")
  .command("listar", "Listado de tareas", {})
  .command("crear", "Crear tarea", { descripcion })
  .command("actualizar", "Actualiza tarea como creada", {
    descripcion,
    completado,
  })
  .command("borrar", "Borrar tarea", { descripcion })
  .help().argv;

module.exports = {
  argv,
};
