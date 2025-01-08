import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";

export const Inicio = () => {
  let navigate = useNavigate();

  return (
    <Container sx={{ pt: "20px" }}>
      <Box>
        <div>
          <Grid2 container spacing={2} columns={{ xs: 6, sm: 12, md: 12 }}>
            <Grid2 size={6}>
              <Card sx={{ maxWidth: 500, maxHeight: 500, alignItems: "rigth" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/consultaEmpleados.png"
                    alt="Consultar empleado"
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography gutterBottom variant="h4" component="div">
                        Consultar empleados
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() => navigate("/listaEmpleados")}
                      >
                        Ir
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 size={6}>
              <Card sx={{ maxWidth: 500, maxHeight: 500, alignItems: "rigth" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/agregarEmpleado.png"
                    alt="Crear empleado"
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography gutterBottom variant="h4" component="div">
                        Crear empleado
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() => navigate("/crearEmpleado")}
                      >
                        Ir
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 size={6}>
              <Card sx={{ maxWidth: 500, maxHeight: 500, alignItems: "rigth" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/editarEmpleado.png"
                    alt="Modificar empleado"
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography gutterBottom variant="h4" component="div">
                        Modificar empleado
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() => navigate("/modificarEmpleado")}
                      >
                        Ir
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 size={6}>
              <Card sx={{ maxWidth: 500, maxHeight: 500, alignItems: "rigth" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image="/eliminarEmpleado.png"
                    alt="Eliminar empleado"
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                  />
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography gutterBottom variant="h4" component="div">
                        Eliminar empleado
                      </Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button
                        variant="outlined"
                        color="success"
                        onClick={() => navigate("/eliminarEmpleado")}
                      >
                        Ir
                      </Button>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          </Grid2>
        </div>
      </Box>
    </Container>
  );
};
