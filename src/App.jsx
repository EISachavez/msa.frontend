import { Box } from "@mui/material";
import { AppTopBar } from "./components/AppTopBar";
import { Route, Routes } from "react-router-dom";
import { GrillaEmpleados } from "./components/grillaEmpleados";
import { CrearEmpleado } from "./components/CrearEmpleado";
import { ActualizaEmpleado } from "./components/ActualizaEmpleado";
import { EliminarEmpleado } from "./components/EliminarEmpleado";
import { Inicio } from "./components/Inicio";

export default function App() {
  return (
    <Box sx={{ pb: "60px" }}>
      <AppTopBar></AppTopBar>

      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/listaEmpleados" element={<GrillaEmpleados />}></Route>
        <Route path="/crearEmpleado" element={<CrearEmpleado />}></Route>
        <Route
          path="/modificarEmpleado"
          element={<ActualizaEmpleado />}
        ></Route>
        <Route path="/eliminarEmpleado" element={<EliminarEmpleado />}></Route>
      </Routes>
    </Box>
  );
}
