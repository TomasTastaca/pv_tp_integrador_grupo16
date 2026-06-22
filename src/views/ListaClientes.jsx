import { Paper, Typography } from "@mui/material";

const ListaClientes = () => {
  return (
    <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Lista de Clientes
      </Typography>

      <Typography variant="body1">
        En esta pantalla se mostrará la lista de clientes.
      </Typography>
    </Paper>
  );
};

export default ListaClientes;