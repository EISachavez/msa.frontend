import { Box } from "@mui/material";
import { AppTopBar } from "./components/AppTopBar";
import { Navigate, Route, Routes } from "react-router-dom";
import { GrillaEmpleados } from "./components/grillaEmpleados";

export default function App() {
  return(
    <Box>
      <AppTopBar></AppTopBar>

      <Routes>
        <Route path="/" element={<Navigate to="/listaEmpleados"/>}></Route>
        <Route path="/listaEmpleados" element={<GrillaEmpleados/>}></Route>

      </Routes>
    </Box>
  )
}
