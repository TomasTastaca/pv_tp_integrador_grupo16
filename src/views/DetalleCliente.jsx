import { Paper, Typography , Box, CircularProgress, Alert } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetalleCliente = () => {
  // Obtener el ID del cliente de los parámetros de la URL
  const { id } = useParams();
  const [cliente, setCliente] = useState(null); // Estado para almacenar los datos del cliente
  const [loading, setLoading] = useState(true); // Estado para mostrar un loader mientras se carga
  const [error, setError] =useState(null); // Estado para manejar errores

  
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
if (loading) {
   return (
      <Box>
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
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Detalle del Cliente
      </Typography>

      <Typography variant="body1">
        En esta pantalla se mostrará la ficha completa del cliente.
      </Typography>
    </Paper>
  );
};

export default DetalleCliente;