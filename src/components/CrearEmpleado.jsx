import KeyIcon from '@mui/icons-material/Key';
import { Box, Button, CircularProgress, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import useEmpleadoHook from "../hooks/useEmpleadoHook"
import md5 from 'md5'

export const CrearEmpleado = () => {
    const {empleado, errores, cargando, handleChange, handleSubmit} = useEmpleadoHook();
    function generarPassword() {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?/';
        let cadenaAleatoria = '';
        for (let i = 0; i < 15; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            cadenaAleatoria += caracteres[indiceAleatorio];
        }
        empleado.password=md5(cadenaAleatoria);
        const eventoSimulado = {
        target: {
            value: 'Actualiza clave'
        }
        };
        handleChange(eventoSimulado);
    }

    return (    
        <Container sx={{pt:'20px'}}> 
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '50ch' }, '& .MuiButtonBase-root': { m: 1, width: '50ch' } }} noValidate autoComplete="off">
                <div>
                    <TextField
                        required
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
                    <FormControl variant="standard" sx={{ m: 1, width: '50ch' }}>
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
                        <MenuItem value={'PO'}>PO</MenuItem>
                        <MenuItem value={'PM'}>PM</MenuItem>
                        <MenuItem value={'Developer I'}>Developer I</MenuItem>
                        <MenuItem value={'Developer II'}>Developer II</MenuItem>
                        <MenuItem value={'Analyst'}>Analyst</MenuItem>
                        <MenuItem value={'Architech'}>Architech</MenuItem>
                        <MenuItem value={'Scrum'}>Scrum</MenuItem>
                        </Select>
                        <FormHelperText error={!!errores.cargo}>{errores.cargo}</FormHelperText>
                    </FormControl>
                    <TextField
                        disabled
                        id="password"
                        name='password'
                        label="Contraseña"
                        type="password"
                        variant="standard"
                        value={empleado.password}
                        onChange={handleChange}
                        error={!!errores.password}
                        helperText={errores.password}
                    />
                    <Button 
                        variant="outlined"
                        color="success"
                        startIcon={<KeyIcon />}
                        onClick={generarPassword}
                    >
                        Generar contraseña
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={cargando}
                        onClick={handleSubmit}
                        >
                        {cargando ? <CircularProgress size={24} color="inherit" /> : 'Crear empleado'}
                    </Button>          
                </div>
            </Box>
        </Container> 
    )
}