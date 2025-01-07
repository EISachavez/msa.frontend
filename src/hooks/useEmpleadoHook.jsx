import { useState } from 'react';

const useEmpleadoHook = (submitCallback) => {
  const [empleado, setEmpleado] = useState({
    usuario: '',
    nombre: '',
    telefono: '',
    correo: '',
    direccion: '',
    cargo: '',
    password: '',
  });
  const [errores, setErrores] = useState({});
  const [cargando, setCargando] = useState(false);

  const validarFormulario = () => {
    const errores = {};
    if (!empleado.usuario) {
        errores.usuario = 'El nombre de usuario es obligatorio';
    } else if(empleado.usuario.includes(" ")){
        errores.usuario = 'El nombre de usuario no debe contener espacios';
    }

    if (!empleado.nombre) {
        errores.nombre = 'El nombre es obligatorio';
    } 

    if (!empleado.telefono) {
        errores.telefono = 'El teléfono es obligatorio';
    } 
    
    if (!empleado.correo) {
        errores.correo = 'El correo es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(empleado.correo)) {
        errores.correo = 'Correo inválido';
    }
    
    if (!empleado.direccion) {
        errores.direccion = 'La direccion es obligatoria';
    }
    
    if (!empleado.cargo || empleado.cargo === "") {
        errores.cargo = 'El cargo es obligatorio';
    }

    if (!empleado.password) {
        errores.password = 'La contraseña es obligatoria';
    } else if (empleado.password.length < 6) {
        errores.password = 'La contraseña debe tener al menos 6 caracteres';
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
    if (!validarFormulario()) return;

    setCargando(true);

    try {
      await submitCallback(empleado); 
      setEmpleado({ usuario: '',
        nombre: '',
        telefono: '',
        correo: '',
        direccion: '',
        cargo: '',
        password: '' });
    } catch (error) {
      console.error('Error al crear el empleado:', error);
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

export default useEmpleadoHook;
