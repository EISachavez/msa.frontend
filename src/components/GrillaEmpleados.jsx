import axios from "axios";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns = [
  { field: "codigo", headerName: "Código" },
  { field: "usuario", headerName: "Username", width: 180 },
  {
    field: "nombre",
    headerName: "Nombre",
    width: 300,
  },
  {
    field: "cargo",
    headerName: "Cargo",
  },
  {
    field: "correo",
    headerName: "Correo",
    width: 250,
  },
  {
    field: "telefono",
    headerName: "Teléfono",
    width: 150,
  },
  {
    field: "direccion",
    headerName: "Dirección",
    width: 200,
  },
];

function getRowId(row) {
  return row.codigo;
}

export const GrillaEmpleados = () => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    const getEmpleados = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9099/api/v1/empleado/"
        );
        const data = response.data;
        console.log(data);
        setEmpleados(data);
      } catch (error) {
        console.error(error);
      }
    };

    getEmpleados();
  }, []);

  return (
    <Container>
      <Box sx={{ height: 650, width: "100%", pt: "20px" }}>
        <DataGrid
          rows={empleados}
          columns={columns}
          getRowId={getRowId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
        />
      </Box>
    </Container>
  );
};
