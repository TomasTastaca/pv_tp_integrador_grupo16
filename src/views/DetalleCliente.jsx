import { Paper, Typography } from "@mui/material";

const DetalleCliente = () => {
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