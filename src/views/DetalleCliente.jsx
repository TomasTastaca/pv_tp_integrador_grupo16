import { Alert ,Button, Paper, Typography , Box, CircularProgress ,
  Grid,
  Divider
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAdmin } from "../context/AdminContext";
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
const DetalleCliente = () => {
  // Obtener el ID del cliente de los parámetros de la URL
  const { id } = useParams();
  const {admin} = useAdmin();

  const [cliente, setCliente] = useState(null); // Estado para almacenar los datos del cliente
  const [loading, setLoading] = useState(true); // Estado para mostrar un loader mientras se carga
  const [error, setError] =useState(null); // Estado para manejar errores
// Snackbar states y mensajes
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("success");

  useEffect(() => {
  const obtenerCliente = async () => {
    try {
      const respuesta = await fetch(
        `https://fakestoreapi.com/users/${id}`
      );

      if (!respuesta.ok) throw new Error();

      const datos = await respuesta.json();

      setCliente(datos);
      setLoading(false);
    } catch {
      setError("No se pudo obtener la información del cliente.");
      setLoading(false);
    }
  };

  obtenerCliente();
}, [id]);

const eliminarCliente = async () => {
  try {
    const respuesta = await fetch(
      `https://fakestoreapi.com/users/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!respuesta.ok) {
      throw new Error();
    }

    setTipoMensaje("success");
    setMensaje(`Cliente con id ${id} ha sido eliminado correctamente de la Base de Datos.`);
    setOpen(true);

  } catch {
    setTipoMensaje("error");
    setMensaje("No se pudo eliminar el cliente de la Base de Datos.");
    setOpen(true);
  }
};

const handleClose = () => {
  setOpen(false);
};

if (loading) {
   return (
      <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        
      }}>
         <CircularProgress/>
      </Box>
   );
}

if (error) {
   return (
      <Alert severity="error">
         {error}
      </Alert>
   );
}
  return (
    <>
     
    <Paper 
     elevation={4}
      sx={{
        maxWidth: 900,
        mx: "auto",
        mt: 4,
        p: 4,
        borderRadius: 3,
      }}
    > 
      <Typography
        variant="h4"
        color="primary"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Ficha Completa del Cliente de {cliente.name.firstname} {cliente.name.lastname} 
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* Información Personal */}
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "#1976d2", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Información Personal
      </Typography>
      
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Nombre:</strong></Typography>
          <Typography>
            {cliente.name.firstname}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Apelllido:</strong></Typography>
          <Typography>{cliente.name.lastname}</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Email:</strong></Typography>
          <Typography>{cliente.email}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Teléfono:</strong></Typography>
          <Typography>{cliente.phone}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Credenciales */}
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "#1976d2", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Credenciales de Acceso de la Base de Datos
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Usuario:</strong></Typography>
          <Typography>{cliente.username}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Contraseña:</strong></Typography>
          <Typography>{cliente.password}</Typography>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Dirección */}
      <Typography
        variant="h6"
        sx={{ mb: 2, color: "#1976d2", fontWeight: "bold", fontSize: "1.5rem" }}
      >
        Dirección Completa
      </Typography>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Calle:</strong></Typography>
          <Typography>{cliente.address.street}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Número:</strong></Typography>
          <Typography>{cliente.address.number}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Ciudad:</strong></Typography>
          <Typography>{cliente.address.city}</Typography>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Código Postal:</strong></Typography>
          <Typography>{cliente.address.zipcode}</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Latitud:</strong></Typography>
          <Typography>{cliente.address.geolocation.lat}</Typography>
        </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
          <Typography><strong>Longitud:</strong></Typography>
          <Typography>{cliente.address.geolocation.long}</Typography>
        </Grid>
      </Grid>

    <Alert
         severity={admin.sector === "Gerencia" ? "warning" : "info"}
         sx={{ mt: 3 }}
      >
        {admin.sector === "Gerencia"
          ? "Como administrador de Gerencia puedes eliminar clientes."
          : "Como administrador de Soporte solo puedes visualizar la información del cliente."}
      </Alert>
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        {/* Botón para volver al listado */}
          <Button
             component={Link}
              to="/clientes"
              variant="outlined"
              sx={{ backgroundColor: "#1c86ff", color: "white", "&:hover": { backgroundColor: "#459cff" } }}
          >
            Volver Al Listado
          </Button>
         {/* Botón para eliminar si eres gerente*/}
        {admin.sector === "Gerencia" && (
          <Button
           variant="contained"
           color="error"
           onClick={eliminarCliente}
           sx={{ backgroundColor: "#ff3236", "&:hover": { backgroundColor: "#f76967" } }}
          >
            Eliminar Cliente
          </Button>
        )}
      </Box>

      {/* Snackbar para mostrar mensaje de éxito */}
    </Paper>
     <Snackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
        onClose={handleClose} 
        severity={tipoMensaje} 
        sx={{ width: '100%' ,backgroundColor: '#4caf50', color: 'white'}}
        >
          {mensaje}
        </Alert>
      </Snackbar>
    </>
  );
};

export default DetalleCliente;