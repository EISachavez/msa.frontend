import {
  Box,
  Button,
  Container,
  Grid2,
  Input,
  InputAdornment,
  Modal,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";
import useAlertas from "../hooks/useAlertas";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const EliminarEmpleado = () => {
  const [codigoEmp, setCodigoEmp] = useState("");
  const { alerta } = useAlertas();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [empleado] = useState({
    codigo: 0,
    usuario: "",
    nombre: "",
    telefono: "",
    correo: "",
    direccion: "",
    cargo: "",
  });

  const handleCodigoChange = (event) => {
    setCodigoEmp(event.target.value);
  };

  const btnEliminar = async () => {
    handleClose();
    setCodigoEmp("");
    Swal.fire({
      title: "¿Confirma la eliminación del empleado?",
      icon: "warning",
      text: "¿Seguro que desea eliminar al empleado? Esta acción no se puede revertir",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          let URI = "http://localhost:9099/api/v1/empleado/" + codigoEmp;

          await axios
            .delete(URI)
            .then(function (response) {
              console.log(response);
              if (response.status === 200) {
                alerta(
                  "Empleado Eliminado",
                  "Se ha eliminado correctamente el empleado con código " +
                    empleado.codigo,
                  "success"
                );
              }
            })
            .catch(function (error) {
              let msgError = error.response.data;
              alerta(
                msgError.codigo + " Error eliminado al empleado ",
                msgError.mensaje,
                "error"
              );
            });
        } catch (error) {
          console.error(error);
        }
      }
    });
  };

  const consultarEmpleado = async () => {
    if (codigoEmp === "") {
      alerta(
        "No hay datos",
        "Debe ingresar un código de empleado para realizar la eliminación.",
        "warning"
      );

      return;
    }
    try {
      let URI = "http://localhost:9099/api/v1/empleado/" + codigoEmp;

      await axios
        .get(URI)
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            handleOpen();
            let data = response.data;
            empleado.codigo = data.codigo;
            empleado.usuario = data.usuario;
            empleado.nombre = data.nombre;
            empleado.telefono = data.telefono;
            empleado.direccion = data.direccion;
            empleado.correo = data.correo;
            empleado.cargo = data.cargo;
          }
        })
        .catch(function (error) {
          let msgError = error.response.data;
          alerta(
            msgError.codigo + " Error buscando al empleado",
            msgError.mensaje,
            "error"
          );
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container sx={{ pt: "20px" }}>
      <Box sx={{ pt: "150px" }}>
        <div>
          <Grid2 container spacing={2} columns={{ xs: 4, sm: 10, md: 10 }}>
            <Grid2 size={8}>
              <Input
                fullWidth
                id="buscar-codigo"
                value={codigoEmp}
                onChange={handleCodigoChange}
                placeholder="Buscar empleado por código"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </Grid2>
            <Grid2 size={2}>
              <Button
                variant="outlined"
                color="success"
                onClick={consultarEmpleado}
              >
                Buscar
              </Button>
            </Grid2>
          </Grid2>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h4">
            Empleado a eliminar:
          </Typography>

          <Grid2
            container
            spacing={2}
            columns={{ xs: 2, sm: 2, md: 2 }}
            sx={{ mt: "25px" }}
          >
            <Grid2 size={1}>
              <Typography variant="h6" component="h6">
                Código del empleado:
              </Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography variant="subtitle1" component="subtitle1">
                {empleado.codigo}
              </Typography>
            </Grid2>

            <Grid2 size={1}>
              <Typography variant="h6" component="h6">
                Nombre del empleado:
              </Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography variant="subtitle1" component="subtitle1">
                {empleado.nombre}
              </Typography>
            </Grid2>

            <Grid2 size={1}>
              <Typography variant="h6" component="h6">
                Teléfono del empleado:
              </Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography variant="subtitle1" component="subtitle1">
                {empleado.telefono}
              </Typography>
            </Grid2>

            <Grid2 size={1}>
              <Typography variant="h6" component="h6">
                Correo del empleado:
              </Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography variant="subtitle1" component="subtitle1">
                {empleado.correo}
              </Typography>
            </Grid2>

            <Grid2 size={1}>
              <Typography variant="h6" component="h6">
                Correo del dirección:
              </Typography>
            </Grid2>
            <Grid2 size={1}>
              <Typography variant="subtitle1" component="subtitle1">
                {empleado.direccion}
              </Typography>
            </Grid2>
          </Grid2>
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              sx={{ ml: "auto", mr: "auto" }}
              onClick={btnEliminar}
            >
              Eliminar
            </Button>
          </Box>
        </Box>
      </Modal>
    </Container>
  );
};
