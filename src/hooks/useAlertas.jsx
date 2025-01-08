import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import "@sweetalert2/theme-dark/dark.css";

const useAlertas = () => {
  const alerta = (
    titulo = "titulo",
    msg = "Se ha completado la tarea con exito.",
    tipo = "question"
  ) => {
    Swal.fire({
      title: titulo,
      text: msg,
      icon: tipo,
    });
  };

  return {
    alerta,
  };
};

export default useAlertas;
