import { Box } from "@mui/material";
import { AppTopBar } from "./components/AppTopBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { GrillaEmpleados } from "./components/grillaEmpleados";
import { CrearEmpleado } from "./components/CrearEmpleado";

export default function App() {
  return(
    <Box>
      <AppTopBar></AppTopBar>

      <Routes>
        <Route path="/" element={<Navigate to="/listaEmpleados"/>}></Route>
        <Route path="/listaEmpleados" element={<GrillaEmpleados/>}></Route>
        <Route path="/crearEmpleado" element={<CrearEmpleado/>}></Route>

      </Routes>
    </Box>
  )
}
