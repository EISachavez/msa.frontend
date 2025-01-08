import axios from "axios";
import { useState } from "react";
import useAlertas from "./useAlertas";

const useUpdateEmpleadoHook = () => {
  const { alerta } = useAlertas();

  const [empleado, setEmpleado] = useState({
    codigo: 0,
    usuario: "",
    nombre: "",
    telefono: "",
    correo: "",
    direccion: "",
    cargo: "",
    verForm: false,
  });
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);

  const validarFormulario = () => {
    const errores = {};
    if (!empleado.usuario) {
      errores.usuario = "El nombre de usuario es obligatorio";
    } else if (empleado.usuario.includes(" ")) {
      errores.usuario = "El nombre de usuario no debe contener espacios";
    }

    if (!empleado.nombre) {
      errores.nombre = "El nombre es obligatorio";
    }

    if (!empleado.telefono) {
      errores.telefono = "El teléfono es obligatorio";
    }

    if (!empleado.correo) {
      errores.correo = "El correo es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(empleado.correo)) {
      errores.correo = "Correo inválido";
    }

    if (!empleado.direccion) {
      errores.direccion = "La direccion es obligatoria";
    }

    if (!empleado.cargo || empleado.cargo === "") {
      errores.cargo = "El cargo es obligatorio";
    }

    setErrores(errores);
    return Object.keys(errores).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({
      ...empleado,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }
    setCargando(true);
    let estado = 1;
    try {
      await axios
        .put("http://localhost:9099/api/v1/empleado/", {
          codigo: empleado.codigo,
          usuario: empleado.usuario,
          nombre: empleado.nombre,
          telefono: empleado.telefono,
          correo: empleado.correo,
          direccion: empleado.direccion,
          cargo: empleado.cargo,
        })
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            estado = 0;
            alerta(
              "Empleado modificado",
              "Se ha modificado el empleado correctamente",
              "success"
            );
          }
        })
        .catch(function (error) {
          let msgError = error.response.data.errores[0];
          alerta(
            msgError.codigo + " Error modificando el empleado",
            "Se ha presentado un error en la modificación del empleado, intente de nuevo, " +
              msgError.mensaje,
            "error"
          );
        });

      if (estado === 0) {
        setEmpleado({
          codigo: 0,
          usuario: "",
          nombre: "",
          telefono: "",
          correo: "",
          direccion: "",
          cargo: "",
          verForm: false,
        });
      }
    } catch (error) {
      alerta(
        "Error creando empleado",
        "Se ha presentado un error en la modificación del empleado, intente más tarde.",
        "error"
      );
      console.error("Error al crear el empleado: " + error);
    } finally {
      setCargando(false);
    }
  };

  return {
    empleado,
    errores,
    cargando,
    handleChange,
    handleSubmit,
  };
};

export default useUpdateEmpleadoHook;
