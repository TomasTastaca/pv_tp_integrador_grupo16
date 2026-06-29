import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Typography,
  Grid,
} from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";

import { useAdmin } from "../context/AdminContext";
import MetricCard from "../components/common/MetricCard";

const API_URL = "https://fakestoreapi.com/users";

const Dashboard = () => {
  const { admin } = useAdmin();

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
          throw new Error();
        }

        const datos = await respuesta.json();

        setClientes(datos);
      } catch {
        setError("No se pudieron cargar las métricas.");
      } finally {
        setLoading(false);
      }
    };

    obtenerClientes();
  }, []);

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 8,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  const totalClientes = clientes.length;

  const ciudadesRegistradas = new Set(
    clientes.map((cliente) => cliente.address.city)
  ).size;

  const correosCargados = clientes.filter(
    (cliente) => cliente.email
  ).length;

  const telefonosCargados = clientes.filter(
    (cliente) => cliente.phone
  ).length;

  return (
    <Box sx={{ p: 3 }}>

      <Card
        sx={{
          mb: 5,
          borderRadius: 4,
          color: "white",
          background:
            "linear-gradient(135deg,#42a5f5,#1e88e5)",
          boxShadow: 5,
        }}
      >
        <CardContent sx={{ p: 4 }}>

          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Hola, {admin?.nombre}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Bienvenido al Panel de Control de Clientes.
          </Typography>

          <Typography sx={{ mt: 1 }}>
            Aquí podrás visualizar las principales métricas
            obtenidas desde la API de clientes.
          </Typography>

        </CardContent>
      </Card>

      <Grid
        container
        spacing={3}
      >

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <MetricCard
            titulo="Clientes"
            valor={totalClientes}
            descripcion="Cantidad total de clientes registrados."
            icono={<PeopleIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <MetricCard
            titulo="Ciudades"
            valor={ciudadesRegistradas}
            descripcion="Cantidad de ciudades registradas."
            icono={<LocationCityIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <MetricCard
            titulo="Correos"
            valor={correosCargados}
            descripcion="Clientes con correo electrónico."
            icono={<AlternateEmailIcon />}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 6, lg: 3 }}>
          <MetricCard
            titulo="Teléfonos"
            valor={telefonosCargados}
            descripcion="Clientes con teléfono registrado."
            icono={<PhoneIcon />}
          />
        </Grid>

      </Grid>

    </Box>
  );
};

export default Dashboard;