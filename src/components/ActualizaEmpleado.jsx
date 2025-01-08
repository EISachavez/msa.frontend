import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  FormHelperText,
  Grid2,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useUpdateEmpleadoHook from "../hooks/useUpdateEmpleadoHook";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import axios from "axios";
import useAlertas from "../hooks/useAlertas";

export const ActualizaEmpleado = () => {
  const { empleado, errores, cargando, handleChange, handleSubmit } =
    useUpdateEmpleadoHook();
  const [codigoEmp, setCodigoEmp] = useState("");
  const { alerta } = useAlertas();

  const handleCodigoChange = (event) => {
    setCodigoEmp(event.target.value);
  };

  const consultarEmpleado = async () => {
    if (codigoEmp === "") {
      alerta(
        "No hay datos",
        "Debe ingresar un código de empleado para realizar la actualización.",
        "warning"
      );
      empleado.verForm = false;
      return;
    }
    try {
      let URI = "http://localhost:9099/api/v1/empleado/" + codigoEmp;

      await axios
        .get(URI)
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            alerta(
              "Empleado encontrado",
              "Se ha encontrado el empleado buscado.",
              "success"
            );
          }
          let data = response.data;
          empleado.codigo = data.codigo;
          empleado.usuario = data.usuario;
          empleado.nombre = data.nombre;
          empleado.telefono = data.telefono;
          empleado.direccion = data.direccion;
          empleado.correo = data.correo;
          empleado.cargo = data.cargo;

          empleado.verForm = true;
          const eventoSimulado = { target: { value: "consulta empleado" } };
          handleChange(eventoSimulado);
        })
        .catch(function (error) {
          let msgError = error.response.data;
          alerta(
            msgError.codigo + " Error buscando al empleado",
            msgError.mensaje,
            "error"
          );
          empleado.verForm = false;
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container sx={{ pt: "20px" }}>
      <Box>
        <div>
          <Grid2 container spacing={2} columns={{ xs: 4, sm: 10, md: 10 }}>
            <Grid2 size={6}>
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

      {empleado.verForm && (
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50ch" },
            "& .MuiButtonBase-root": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              disabled
              id="codigo"
              name="codigo"
              label="Código del empleado"
              placeholder="código del empleado"
              variant="standard"
              value={empleado.codigo}
            />
            <TextField
              disabled
              id="usuario"
              name="usuario"
              label="Nombre de usuario"
              placeholder="nombre de usuario del empleado"
              variant="standard"
              value={empleado.usuario}
              onChange={handleChange}
              error={!!errores.usuario}
              helperText={errores.usuario}
            />
            <TextField
              required
              id="nombre"
              name="nombre"
              label="Nombre del empleado"
              defaultValue=""
              placeholder="nombre completo del empleado"
              variant="standard"
              value={empleado.nombre}
              onChange={handleChange}
              error={!!errores.nombre}
              helperText={errores.nombre}
            />
            <TextField
              required
              id="telefono"
              name="telefono"
              label="Teléfono del empleado"
              defaultValue=""
              placeholder="teléfono del empleado"
              variant="standard"
              value={empleado.telefono}
              onChange={handleChange}
              error={!!errores.telefono}
              helperText={errores.telefono}
            />
            <TextField
              required
              id="correo"
              name="correo"
              label="Correo electrónico del empleado"
              defaultValue=""
              placeholder="correo electrónico del empleado"
              variant="standard"
              value={empleado.correo}
              onChange={handleChange}
              error={!!errores.correo}
              helperText={errores.correo}
            />
            <TextField
              required
              id="direccion"
              name="direccion"
              label="Dirección de residencia del empleado"
              defaultValue=""
              placeholder="dirección de residencia del empleado"
              variant="standard"
              value={empleado.direccion}
              onChange={handleChange}
              error={!!errores.direccion}
              helperText={errores.direccion}
            />
            <FormControl variant="standard" sx={{ m: 1, width: "50ch" }}>
              <InputLabel id="cargoInput">Cargo</InputLabel>
              <Select
                labelId="cargoInput"
                id="cargo"
                name="cargo"
                value={empleado.cargo}
                onChange={handleChange}
                label="Cargo"
                error={!!errores.cargo}
              >
                <MenuItem value="">
                  <em>Seleccione</em>
                </MenuItem>
                <MenuItem value={"PO"}>PO</MenuItem>
                <MenuItem value={"PM"}>PM</MenuItem>
                <MenuItem value={"Developer I"}>Developer I</MenuItem>
                <MenuItem value={"Developer II"}>Developer II</MenuItem>
                <MenuItem value={"Analyst"}>Analyst</MenuItem>
                <MenuItem value={"Architech"}>Architech</MenuItem>
                <MenuItem value={"Scrum"}>Scrum</MenuItem>
              </Select>
              <FormHelperText error={!!errores.cargo}>
                {errores.cargo}
              </FormHelperText>
            </FormControl>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              disabled={cargando}
              onClick={handleSubmit}
            >
              {cargando ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Modificar empleado"
              )}
            </Button>
          </div>
        </Box>
      )}
    </Container>
  );
};
