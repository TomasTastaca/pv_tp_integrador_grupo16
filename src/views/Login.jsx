import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useAdmin } from "../context/AdminContext";

const Login = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    sector: "Soporte",
  });

  const [error, setError] = useState("");

  const { login } = useAdmin();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formulario.nombre.trim() === "") {
      setError("Debe ingresar el nombre del administrador.");
      return;
    }

    login({
      nombre: formulario.nombre,
      sector: formulario.sector,
    });

    navigate("/dashboard");
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Paper elevation={4} sx={{ padding: 4, width: "100%" }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Iniciar sesión
          </Typography>

          <Typography variant="body1" color="text.secondary" gutterBottom>
            Ingrese los datos del administrador para acceder al sistema.
          </Typography>

          {error && (
            <Alert severity="error" sx={{ marginTop: 2, marginBottom: 2 }}>
              {error}
            </Alert>
          )}

          <Box component="form" onSubmit={handleSubmit} sx={{ marginTop: 3 }}>
            <TextField
              fullWidth
              label="Nombre del Administrador"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              fullWidth
              select
              label="Sector de la Empresa"
              name="sector"
              value={formulario.sector}
              onChange={handleChange}
              margin="normal"
            >
              <MenuItem value="Soporte">Soporte</MenuItem>
              <MenuItem value="Gerencia">Gerencia</MenuItem>
            </TextField>

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{ marginTop: 3 }}
            >
              Ingresar
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Login;